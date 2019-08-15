import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Printer } from '@ionic-native/printer';
import { AlertController } from 'ionic-angular';
import { TransactionhandlerProvider } from '../../providers/transactionhandler/transactionhandler';
/**
 * Generated class for the BillpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billpopup',
  templateUrl: 'billpopup.html',
})
export class BillpopupPage {
  addedItems = [];
  total = 0;
  customerDetails:any = [];
  cash:any = [];
  constructor(public navCtrl: NavController,public navParams: NavParams,
    private transactionHandler:TransactionhandlerProvider,
     private http: Http,private alertCtrl:AlertController) {

  }
  async saveorder() {
    let addedProduct = [];
    this.addedItems.forEach(items => {
      let orderitem = {
        ProductId: items.productid,
        Quantity: items.qty,
        netTotal: items.qty*items.price,
        Discount: 0,
        ProductPrice: items.price,
        ProductName:items.name,
       
        CreatedDate: new Date()
      }

      addedProduct.push(orderitem)
    });
    let postData = {
      Header: {
        CustomerName:this.customerDetails.name,
        CustomerId: this.customerDetails.id,
        UserId: 1555,
        netTotal: this.total,
        Discount: 0,
        ServiceCharge: 0,
        ServiceChargeId: 0,
        ServiceChargeTotal: 0,
        RecivedAmount:this.cash.recived,
        ReturndAmount:this.cash.return,
        DiscountTotal: 144,
        CreatedDate: new Date(),
        GrandTotal:  this.total,
        EmailAddress:this.customerDetails.email

      },
      orderDetails:addedProduct

    };

    let response = await this.transactionHandler.saveorderAndPrint(postData);
    response.subscribe((response)=>{
      if (response['_body']) {
        let result = JSON.parse(response['_body']);
        console.log(result)
        if (result.IsSucess) {
          console.log(result.data);
          this.print(result.data.Header._id);         
        } else {
        
        }
      }
    })
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json');
    // const requestOptions = new RequestOptions({ headers: headers });
    // this.http.post("http://localhost:4000/api/order", postData, requestOptions)
    //   .subscribe(data => {
    //     if (data['_body']) {
    //       let result = JSON.parse(data['_body']);
    //       console.log(result)
    //       if (result.IsSucess) {
    //         console.log(result.data);
    //         this.print(result.data.Header._id);
           
    //       } else {
          
    //       }
    //     }
        
    //   }, error => {
    //     console.log(error);
       
    //   });
  }

  print(orderid) {
    this.http.get('http://localhost:4000/api/print/recipt/'+orderid).subscribe(result => {
      console.log(result);      
    
        let prod = JSON.parse(result['_body']);
        if (prod.IsSucess) {
          this.showAlert("Recipt ",prod.Message)
          //this.products  = prod.data;
          console.log(prod.data);
        }
      

      // console.log(this.products);
    })
    // this.printer.isAvailable().then((onSuccess=>{
    //   console.log(onSuccess);
    // }), onError=>{
    //   console.log(onError)
    // });

    // let options: PrintOptions = {
    //   name: 'MyDocument',
    //   printerId: 'printer007',
    //   duplex: true,
    //   landscape: true,
    //   grayscale: true
    // }


    // this.printer.print(content, options).then(onSuccess, onError)

  }
  showAlert(hedding,message) {
    const alert = this.alertCtrl.create({
      title: hedding,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    this.addedItems = this.navParams.get('orderItems');
    console.table(this.navParams.get('orderItems'));
    console.log(this.navParams.get('totals'));
    this.total = parseFloat(this.navParams.get('totals'));
    console.log('ionViewDidLoad BillpopupPage');
  }

}
