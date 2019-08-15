import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BillpopupPage } from '../billpopup/billpopup';
import { TransactionhandlerProvider } from '../../providers/transactionhandler/transactionhandler';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemcategories = {"categories": [
    {
      "ProductCategoryid": 1,
      "Category": "1",
      "Name": "Photos",
      "icon":"camera"
      
      
    },{
      "ProductCategoryid": 2,
      "Category": "1",
      "Name": "frames",
      "icon":"image"
      
      
    },{
      "ProductCategoryid": 3,
      "Category": "1",
      "Name": "Letho Print",
      "icon":"images"
      
      
    },
    {
      "ProductCategoryid": 4,
      "Category": "1",
      "Name": "Photo Albums",
      "icon":"book"          
      
    }],
    "product":[
      {
        "productid": "01",
        "Category": 1,
        "Name": "4R",
        "price":350
      },
      {
        "productid": "02",
        "Category":1,
        "Name": "8R",
        "price":550
      },
      {
        "productid": "03",
        "Category": 1,
        "Name": "12R",
        "price":850
      },
      
      {
        "productid": "04",
        "Category": 2,
        "Name": "4R Frame",
        "price":"350"
      },
      {
        "productid": "05",
        "Category": 2,
        "Name": "8R Frame",
        "price":550
      },
      {
        "productid": "06",
        "Category": 2,
        "Name": "12R Frame",
        "price":850
      },

      {
        "productid": "07",
        "Category": 3,
        "Name": "Magic mug",
        "price":350
      },
      {
        "productid": "08",
        "Category": 3,
        "Name": "Crustal Print",
        "price":550
      },
      {
        "productid": "09",
        "Category": 3,
        "Name": "Granate Print",
        "price":850
      }

    ]};
  items;
  addeditems = [];
  selectedcategory = 1 ;
  selectedProduct = {'price':'',"qty":0,"name":'',"productid":''};
  total = 0;
  netQty = 0;
  netamount = 0;
  grandAmount = 0;
  discountAmount = 0;
  products;

  constructor(public navCtrl: NavController,private http: Http,public modalCtrl: ModalController,private transactionHandler:TransactionhandlerProvider) {
    this.loaditems();
    this.selectCategory(1)
  }
  
  async loaditems(){
    let products = await this.transactionHandler.getAllProduct()
    products.subscribe(result => {
      console.log(result);
      if(result.status == 200){
      let prod = JSON.parse(result['_body']);
        if(prod.IsSucess){
          this.products  = prod.data;

        }
      }
      
      console.log(this.products);
    })
  
  }
  selectProduct(item){
    console.log(item);
      this.selectedProduct.productid = item._id;
      this.selectedProduct.name = item.Name;
      this.selectedProduct.price = item.Price;
      this.selectedProduct.qty = 1;
      this.netQty += 1;
      this.addeditems.push(this.selectedProduct);
      var balance = parseFloat(this.selectedProduct.price) ;
      this.AddTotal(balance);
      
      this.selectedProduct = {'price':'',"qty":0,"name":'',"productid":''};
     // this.selectedProduct = item
  }
  async selectCategory(categoryid){
      console.log(categoryid);
      this.items = [];

     
      let response = await this.transactionHandler.getProductByCategoryId(categoryid)
      response.subscribe(result => {
      console.log(result);
      if(result.status == 200){
      let prod = JSON.parse(result['_body']);
        if(prod.IsSucess){
          this.products  = prod.data;

        }
      }
      
      console.log(this.products);
    })
  }
  additem(){
    this.addeditems.push(this.selectedProduct);
    var balance = parseFloat(this.selectedProduct.price) * this.selectedProduct.qty;
    this.AddTotal(balance);
    this.netQty += this.selectedProduct.qty;
    this.selectedProduct = {'price':'',"qty":0,"name":'',"productid":''};
  }
  removeitems(){
    this.addeditems = [];
    this.total = 0;
    this.netQty = 0;
  }
  AddTotal(value){
    this.total += value;
  }
  deductTotal(value){
    this.total -= value;
  }
  SaveOrder(){
      console.log(this.addeditems);
    this.printInvoice();
  }
  printInvoice(){   
      const modal = this.modalCtrl.create(BillpopupPage,{
        orderItems:this.addeditems,
        totals:this.total
      });
      modal.present();    
  }
}
