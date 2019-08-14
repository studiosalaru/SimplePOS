webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_add_product_add__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__product_add_product_add__["a" /* ProductAddPage */]);
        modal.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Admin</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-list-header>\n\n            Master Data\n\n          </ion-list-header>\n\n          <ion-item (click)="presentModal()"> Product</ion-item>\n\n          <ion-item>Services</ion-item>\n\n          <ion-item>Ingradiant</ion-item>\n\n          <ion-item>Category</ion-item>\n\n          <ion-item>Type</ion-item>\n\n          <ion-list-header>\n\n            Cancellation\n\n          </ion-list-header>\n\n          <ion-item (click)="presentModal()"> Order </ion-item>\n\n          <ion-item>Reservation </ion-item>\n\n          <ion-item>Payment </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductAddPage = /** @class */ (function () {
    function ProductAddPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    }
    ProductAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductAddPage');
        this.loadallproduct();
    };
    ProductAddPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.products = this.products.filter(function (item) {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
        }
    };
    ProductAddPage.prototype.selectItem = function (item) {
        console.log(item);
        this.productDTO.Name = item.Name;
        this.productDTO.Category = item.CategoryId;
        this.productDTO.Id = item._id;
        this.productDTO.SubCategory = item.SubCategory;
        this.productDTO.Price = item.Price;
        this.productDTO.Size = item.size;
    };
    ProductAddPage.prototype.createProduct = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": this.productDTO.Name,
            "CategoryId": this.productDTO.Category,
            "SubCategory": this.productDTO.SubCategory,
            "Price": this.productDTO.Price,
            "Size": this.productDTO.Size
        };
        if (this.productDTO.Id != "") {
            this.http.put("http://localhost:4000/api/product/" + this.productDTO.Id, postData, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Not found");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                _this.presentConfirm(error.message);
                console.log(error);
            });
        }
        else {
            this.http.post("http://localhost:4000/api/product", postData, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Creation Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
                _this.presentConfirm(error.message);
            });
        }
        this.loadallproduct();
    };
    ProductAddPage.prototype.loadallproduct = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
            console.log(result);
            if (result['_body']) {
                var resultset = JSON.parse(result['_body']);
                _this.products = resultset.data;
            }
        });
    };
    ProductAddPage.prototype.newProdut = function () {
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    };
    ProductAddPage.prototype.deleteProduct = function () {
        var _this = this;
        if (this.productDTO.Id != "") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.delete("http://localhost:4000/api/product/" + this.productDTO.Id, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Creation Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.presentConfirm("Select product to delete");
        }
    };
    ProductAddPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ProductAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-add',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\product-add\product-add.html"*/'<!--\n\n  Generated template for the ProductAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button end navPop >\n\n          <ion-icon  name="close"></ion-icon>\n\n        </button>\n\n    <ion-title>Product</ion-title>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n          <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label>Product Name</ion-label>\n\n                <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label>Product Category</ion-label>\n\n                <ion-select [(ngModel)]="productDTO.Category">\n\n                    <ion-option value="1">Photo</ion-option>\n\n                    <ion-option value="2">Frame</ion-option>\n\n                    <ion-option value="3">Mug</ion-option>\n\n                    \n\n                  </ion-select>\n\n                \n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>SubCategory</ion-label>\n\n                  <ion-select [(ngModel)]="productDTO.SubCategory">\n\n                      <ion-option value="1">Mate</ion-option>\n\n                      <ion-option value="2">Gloss </ion-option>\n\n                    </ion-select>\n\n                  \n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label>Product Price</ion-label>\n\n                <ion-input [(ngModel)]="productDTO.Price" type="nmumber"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>Size</ion-label>\n\n                  <ion-input [(ngModel)]="productDTO.Size" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n            \n\n      </ion-col>\n\n      <ion-col col-4  >\n\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n          <ion-list style="height:30vh; overflow:auto">\n\n            <ion-item *ngFor="let item of products" (click)="selectItem(item)">\n\n              {{ item.Name }}\n\n            </ion-item>\n\n            <ion-item>\n\n              Item One\n\n            </ion-item>\n\n          </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n \n\n\n\n  <button ion-button (click)="newProdut()" >New</button>\n\n  <button ion-button (click)="createProduct()" >Save</button>\n\n  <button ion-button (click)="deleteProduct()" >Delete</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\product-add\product-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductAddPage);
    return ProductAddPage;
}());

//# sourceMappingURL=product-add.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BillpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillpopupPage = /** @class */ (function () {
    function BillpopupPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.addedItems = [];
        this.total = 0;
        this.customerDetails = [];
        this.cash = [];
    }
    BillpopupPage.prototype.saveorder = function () {
        var _this = this;
        var addedProduct = [];
        this.addedItems.forEach(function (items) {
            var orderitem = {
                ProductId: items.productid,
                Quantity: items.qty,
                netTotal: items.qty * items.price,
                Discount: 0,
                ProductPrice: items.price,
                ProductName: items.name,
                CreatedDate: new Date()
            };
            addedProduct.push(orderitem);
        });
        var postData = {
            Header: {
                CustomerName: this.customerDetails.name,
                CustomerId: this.customerDetails.id,
                UserId: 1555,
                netTotal: this.total,
                Discount: 0,
                ServiceCharge: 0,
                ServiceChargeId: 0,
                ServiceChargeTotal: 0,
                RecivedAmount: this.cash.recived,
                ReturndAmount: this.cash.return,
                DiscountTotal: 144,
                CreatedDate: new Date(),
                GrandTotal: this.total,
                EmailAddress: this.customerDetails.email
            },
            orderDetails: addedProduct
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("http://localhost:4000/api/order", postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                console.log(result);
                if (result.IsSucess) {
                    console.log(result.data);
                    _this.print(result.data.Header._id);
                    // this.presentConfirm(result.Message);
                }
                else {
                    // this.presentConfirm("Product Creation Fail")
                }
            }
        }, function (error) {
            console.log(error);
            // this.presentConfirm(error.message)
        });
    };
    BillpopupPage.prototype.print = function (orderid) {
        var _this = this;
        this.http.get('http://localhost:4000/api/print/recipt/' + orderid).subscribe(function (result) {
            console.log(result);
            if (result.status == 200) {
                var prod = JSON.parse(result['_body']);
                if (prod.IsSucess) {
                    _this.showAlert("Recipt ", prod.re);
                    //this.products  = prod.data;
                    console.log(prod.data);
                }
            }
            // console.log(this.products);
        });
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
    };
    BillpopupPage.prototype.showAlert = function (hedding, message) {
        var alert = this.alertCtrl.create({
            title: hedding,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    BillpopupPage.prototype.ionViewDidLoad = function () {
        this.addedItems = this.navParams.get('orderItems');
        console.table(this.navParams.get('orderItems'));
        console.log(this.navParams.get('totals'));
        this.total = parseFloat(this.navParams.get('totals'));
        console.log('ionViewDidLoad BillpopupPage');
    };
    BillpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-billpopup',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\billpopup\billpopup.html"*/'<!--\n  Generated template for the BillpopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="save"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title>Invoice</ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button icon-only (click)="print()">\n        <ion-icon name="print"></ion-icon>\n      </button> -->\n      <button ion-button icon-only (click)="saveorder()">\n          <ion-icon name="print" ></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container-fluid">\n    <div class="row no-gutters">\n      <div class="col">\n        <h1> Studo Salaru</h1>\n      </div>\n    </div>\n\n    <div class="row no-gutters">\n      <div class="col">\n        <img src="../../assets/logotipo.svg" alt="logotipo" class="logotipo">\n      </div>\n\n      <div class="col">\n        <h2>Studio Salaru</h2>\n        <p>0777 123 499</p>\n        <div class="address">\n          <p>studiosalarucreation@gmail.com</p>\n          <p>No 47/1/A</p>\n          <p>Studio Salaru, Kurunegala Rd,</p>\n          <p>Katugastota</p>\n        </div>\n      </div>\n    </div>\n\n    <div class="row no-gutters items-group">\n\n      <div>\n        <ion-item>\n          <ion-label color="primary" fixed>Name</ion-label>\n          <ion-input [(ngModel)]="customerDetails.name" type="text" placeholder="Full Name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" fixed>Phone</ion-label>\n          <ion-input type="tel" [(ngModel)]="customerDetails.id" placeholder="Tel Input"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" fixed>Email Address</ion-label>\n          <ion-input type="email" [(ngModel)]="customerDetails.email" placeholder="Email Address"></ion-input>\n        </ion-item>\n      </div>\n    </div>\n\n    <div class="row no-gutters items-group">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Item</ion-col>\n          <ion-col col-3>QTY</ion-col>\n          <ion-col col-3>Price</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let item of addedItems">\n          <ion-col col-6>{{item.name}}</ion-col>\n          <ion-col col-3>{{item.qty}}</ion-col>\n          <ion-col col-3>{{item.price}} </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="row no-gutters items-group">\n      <ion-grid>\n       \n        <ion-row >\n          <ion-col col-6>Grand Total</ion-col>\n          <ion-col col-6>{{total}}</ion-col>\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n        </ion-row>\n\n        <ion-row >\n          <ion-col col-6>Amount Recived</ion-col>\n          <ion-col col-6>\n            <ion-input type="number" [(ngModel)]="cash.recived" placeholder="Recived Amount"></ion-input>\n          </ion-col>\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n        </ion-row>\n\n        <ion-row >\n          <ion-col col-6>Amount Return</ion-col>\n          <ion-col col-6>\n            <ion-input type="number" [(ngModel)]="cash.return" placeholder="Return Amount"></ion-input>\n          </ion-col>\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="row no-gutters items-group">\n      <div class="col">\n        <p class="label">Thank you:</p>\n        <ul class="disclaimer">\n          <li>Please keep this bill untill your product recived </li>\n          <li>if  there any issue or damage dont hasitate to contact us </li>\n          <li>please contact with our mobile number</li>\n          <!-- <li>O preço acresce 10% a cada 30 dias após fim do prazo de levantamento (taxa de conservação)</li>\n          <li>Os dados do cliente, acima mencionados, ficam registados na N Reparações apenas para efeitos de\n            comunicação\n            em relação às suas assistências e facturação\n          </li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class="row no-gutters">\n      <div class="col">\n        <p class="disclaimer signature-field">Studio Salaru - By SimplePOS 03/02/2019</p>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\billpopup\billpopup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], BillpopupPage);
    return BillpopupPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=billpopup.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		275,
		3
	],
	"../pages/billpopup/billpopup.module": [
		276,
		2
	],
	"../pages/category/category.module": [
		277,
		0
	],
	"../pages/product-add/product-add.module": [
		278,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billpopup_billpopup__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.itemcategories = { "categories": [
                {
                    "ProductCategoryid": 1,
                    "Category": "1",
                    "Name": "Photos",
                    "icon": "camera"
                }, {
                    "ProductCategoryid": 2,
                    "Category": "1",
                    "Name": "frames",
                    "icon": "image"
                }, {
                    "ProductCategoryid": 3,
                    "Category": "1",
                    "Name": "Letho Print",
                    "icon": "images"
                },
                {
                    "ProductCategoryid": 4,
                    "Category": "1",
                    "Name": "Photo Albums",
                    "icon": "book"
                }
            ],
            "product": [
                {
                    "productid": "01",
                    "Category": 1,
                    "Name": "4R",
                    "price": 350
                },
                {
                    "productid": "02",
                    "Category": 1,
                    "Name": "8R",
                    "price": 550
                },
                {
                    "productid": "03",
                    "Category": 1,
                    "Name": "12R",
                    "price": 850
                },
                {
                    "productid": "04",
                    "Category": 2,
                    "Name": "4R Frame",
                    "price": "350"
                },
                {
                    "productid": "05",
                    "Category": 2,
                    "Name": "8R Frame",
                    "price": 550
                },
                {
                    "productid": "06",
                    "Category": 2,
                    "Name": "12R Frame",
                    "price": 850
                },
                {
                    "productid": "07",
                    "Category": 3,
                    "Name": "Magic mug",
                    "price": 350
                },
                {
                    "productid": "08",
                    "Category": 3,
                    "Name": "Crustal Print",
                    "price": 550
                },
                {
                    "productid": "09",
                    "Category": 3,
                    "Name": "Granate Print",
                    "price": 850
                }
            ] };
        this.addeditems = [];
        this.selectedcategory = 1;
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '' };
        this.total = 0;
        this.netQty = 0;
        this.netamount = 0;
        this.grandAmount = 0;
        this.discountAmount = 0;
        this.loaditems();
        this.selectCategory(1);
    }
    HomePage.prototype.loaditems = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
            console.log(result);
            if (result.status == 200) {
                var prod = JSON.parse(result['_body']);
                if (prod.IsSucess) {
                    _this.products = prod.data;
                }
            }
            console.log(_this.products);
        });
    };
    HomePage.prototype.selectProduct = function (item) {
        console.log(item);
        this.selectedProduct.productid = item._id;
        this.selectedProduct.name = item.Name;
        this.selectedProduct.price = item.Price;
        this.selectedProduct.qty = 1;
        this.netQty += 1;
        this.addeditems.push(this.selectedProduct);
        var balance = parseFloat(this.selectedProduct.price);
        this.AddTotal(balance);
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '' };
        // this.selectedProduct = item
    };
    HomePage.prototype.selectCategory = function (categoryid) {
        var _this = this;
        console.log(categoryid);
        this.items = [];
        // this.products = this.itemcategories.product.filter(item =>{
        //       return item.Category == categoryid;
        // })
        var url = '' + categoryid;
        this.http.get('http://localhost:4000/api/productByCategoryId/' + categoryid).subscribe(function (result) {
            console.log(result);
            if (result.status == 200) {
                var prod = JSON.parse(result['_body']);
                if (prod.IsSucess) {
                    _this.products = prod.data;
                }
            }
            console.log(_this.products);
        });
    };
    HomePage.prototype.additem = function () {
        this.addeditems.push(this.selectedProduct);
        var balance = parseFloat(this.selectedProduct.price) * this.selectedProduct.qty;
        this.AddTotal(balance);
        this.netQty += this.selectedProduct.qty;
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '' };
    };
    HomePage.prototype.removeitems = function () {
        this.addeditems = [];
        this.total = 0;
        this.netQty = 0;
    };
    HomePage.prototype.AddTotal = function (value) {
        this.total += value;
    };
    HomePage.prototype.deductTotal = function (value) {
        this.total -= value;
    };
    HomePage.prototype.SaveOrder = function () {
        console.log(this.addeditems);
        this.printInvoice();
    };
    HomePage.prototype.printInvoice = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__billpopup_billpopup__["a" /* BillpopupPage */], {
            orderItems: this.addeditems,
            totals: this.total
        });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-segment *ngFor="let item of itemcategories.categories" [(ngModel)]="icons" color="secondary">\n\n              <ion-segment-button value="{{item.ProductCategoryid}}" (click)="selectCategory(item.ProductCategoryid)">\n\n                <ion-icon name="{{item.icon}}"></ion-icon>\n\n                {{item.Name}}\n\n              </ion-segment-button>\n\n            </ion-segment>\n\n          </ion-row>\n\n          <ion-row>\n\n            <!-- <ion-col col-4>\n\n              <ion-item-group>\n\n                <ion-item-divider color="light">Items</ion-item-divider>\n\n                <ion-item *ngFor="let item of products" (click)="selectProduct(item)">{{item.Name}}</ion-item>\n\n               \n\n              </ion-item-group>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <h2>Item Detail</h2>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n\n\n                  <ion-col col-2>\n\n                    Name\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    {{selectedProduct.name}}\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n\n                    Qty\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <input type="text" [(ngModel)]="selectedProduct.qty" />\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n\n                    Price\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <input type="text" [(ngModel)]="selectedProduct.price" />\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-col> -->\n\n\n\n\n\n            <ion-col>\n\n\n\n              <div class="square-container">\n\n                <div class="square" (click)="selectProduct(item)" *ngFor="let item of products">\n\n                  <div class="content">{{item.Name}}</div>\n\n                </div>\n\n\n\n                \n\n              </div>\n\n            </ion-col>\n\n\n\n          </ion-row>\n\n         </ion-grid>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <h1>Bill</h1>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-list>\n\n                <ion-item>\n\n                  <ion-row>\n\n                    <ion-col col-4>Name</ion-col>\n\n                    <ion-col>Qty</ion-col>\n\n                    <ion-col>Price</ion-col>\n\n                  </ion-row>\n\n                </ion-item>\n\n                <ion-item *ngFor="let item of addeditems">\n\n                  <ion-row>\n\n                    <ion-col col-4>{{item.name}}</ion-col>\n\n                    <ion-col>{{item.qty}}</ion-col>\n\n                    <ion-col>{{item.price}} RS</ion-col>\n\n                  </ion-row>\n\n\n\n                </ion-item>\n\n\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="removeitems()">Clear</button>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Net Qty\n\n            </ion-col>\n\n            <ion-col>\n\n              {{netQty}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Net Total\n\n            </ion-col>\n\n            <ion-col>\n\n              {{totaln  }}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Discount\n\n            </ion-col>\n\n            <ion-col>\n\n              15%\n\n            </ion-col>\n\n          </ion-row>\n\n          <hr>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2> Grand Total</h2>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h2>{{grandAmount + total }} Rs</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button full (click)="discount()">Discount</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="SaveOrder()">Save</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="Save()">Cancel</button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div class="square-container">               \n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">7</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">8</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">9</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">10</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">100</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">4</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">5</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">6</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">50</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">500</div>\n\n                </div>\n\n\n\n                <div class="square">\n\n                  <div class="keyboardKey">1</div>\n\n                </div>\n\n                <div class="square">\n\n                  <div class="keyboardKey">2</div>\n\n                </div>\n\n                <div class="square">\n\n                  <div class="keyboardKey">3</div>\n\n                </div>\n\n                <div class="square">\n\n                  <div class="keyboardKey">1000</div>\n\n                </div>\n\n                <div class="square">\n\n                  <div class="keyboardKey">5000</div>\n\n                </div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_billpopup_billpopup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_printer_ngx__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__["a" /* ProductAddPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_billpopup_billpopup__["a" /* BillpopupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/billpopup/billpopup.module#BillpopupPageModule', name: 'BillpopupPage', segment: 'billpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-add/product-add.module#ProductAddPageModule', name: 'ProductAddPage', segment: 'product-add', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__["a" /* ProductAddPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_billpopup_billpopup__["a" /* BillpopupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_printer_ngx__["a" /* Printer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Admin', component: __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin__["a" /* AdminPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map