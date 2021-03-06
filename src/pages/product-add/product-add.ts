import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { TransactionhandlerProvider } from '../../providers/transactionhandler/transactionhandler';

/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-add',
  templateUrl: 'product-add.html',
})
export class ProductAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private http: Http, private alertCtrl: AlertController,private transactionHandler:TransactionhandlerProvider) {
  }
  searchQuery: string = '';

  products;
  productfilter;
  productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductAddPage');
    this.loadallproduct();
  }
  getItems(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {

    }
  }
  selectItem(item) {
    console.log(item);
    this.productDTO.Name = item.Name;
    this.productDTO.Category = item.CategoryId;
    this.productDTO.Id = item._id;
    this.productDTO.SubCategory = item.SubCategory;
    this.productDTO.Price = item.Price;
    this.productDTO.Size = item.size;
  }
 async createProduct() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "Name": this.productDTO.Name,
      "CategoryId": this.productDTO.Category,
      "SubCategory": this.productDTO.SubCategory,
      "Price": this.productDTO.Price,
      "Size": this.productDTO.Size

    }

    if (this.productDTO.Id != "") {
      let response = await this.transactionHandler.updateProduct(this.productDTO.Id,postData);
      response.subscribe(data => {
          if (data['_body']) {
            let result = JSON.parse(data['_body']);
            console.log(result)
            if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm("Product Not found")
            }
          }
          console.log(data['_body']);
        }, error => {
          this.presentConfirm(error.message)
          console.log(error);
        });
    } else {
      let response = await this.transactionHandler.addnewProduct(postData)
      response.subscribe(data => {
          if (data['_body']) {
            let result = JSON.parse(data['_body']);
            console.log(result)
            if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm("Product Creation Fail")
            }
            this.loadallproduct();
          }
          console.log(data['_body']);
        }, error => {
          console.log(error);
          this.presentConfirm(error.message)
          this.loadallproduct();

        });
    }
   

  }
  async loadallproduct() {
     let response = await this.transactionHandler.getAllProduct();
    response.subscribe(result => {
      console.log(result);
      if(result['_body']){
        let resultset =  JSON.parse(result['_body']);
        this.products = resultset.data;
      }
    })
  }
  newProdut() {
    this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
  }
  async deleteProduct() {
    if(this.productDTO.Id != ""){

    let response = await this.transactionHandler.deleteProduct(this.productDTO.Id);
    response.subscribe(data => {
        if (data['_body']) {
          let result = JSON.parse(data['_body']);
          console.log(result)
          if (result.IsSucess) {
            this.presentConfirm(result.Message);
          } else {
            this.presentConfirm("Product Creation Fail")
          }
        }
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
    }else{
      this.presentConfirm("Select product to delete")
    }
    

  }
  presentConfirm(message) {
    let alert = this.alertCtrl.create({
      title: 'Product ',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Got It',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
