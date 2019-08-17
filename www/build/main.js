webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_add_product_add__ = __webpack_require__(104);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transactionhandler_transactionhandler__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductAddPage = /** @class */ (function () {
    function ProductAddPage(navCtrl, navParams, http, alertCtrl, transactionHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.transactionHandler = transactionHandler;
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers, requestOptions, postData, response, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        postData = {
                            "Name": this.productDTO.Name,
                            "CategoryId": this.productDTO.Category,
                            "SubCategory": this.productDTO.SubCategory,
                            "Price": this.productDTO.Price,
                            "Size": this.productDTO.Size
                        };
                        if (!(this.productDTO.Id != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.transactionHandler.updateProduct(this.productDTO.Id, postData)];
                    case 1:
                        response = _a.sent();
                        response.subscribe(function (data) {
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
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.transactionHandler.addnewProduct(postData)];
                    case 3:
                        response = _a.sent();
                        response.subscribe(function (data) {
                            if (data['_body']) {
                                var result = JSON.parse(data['_body']);
                                console.log(result);
                                if (result.IsSucess) {
                                    _this.presentConfirm(result.Message);
                                }
                                else {
                                    _this.presentConfirm("Product Creation Fail");
                                }
                                _this.loadallproduct();
                            }
                            console.log(data['_body']);
                        }, function (error) {
                            console.log(error);
                            _this.presentConfirm(error.message);
                            _this.loadallproduct();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.loadallproduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transactionHandler.getAllProduct()];
                    case 1:
                        response = _a.sent();
                        response.subscribe(function (result) {
                            console.log(result);
                            if (result['_body']) {
                                var resultset = JSON.parse(result['_body']);
                                _this.products = resultset.data;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.newProdut = function () {
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    };
    ProductAddPage.prototype.deleteProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.productDTO.Id != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.transactionHandler.deleteProduct(this.productDTO.Id)];
                    case 1:
                        response = _a.sent();
                        response.subscribe(function (data) {
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
                        return [3 /*break*/, 3];
                    case 2:
                        this.presentConfirm("Select product to delete");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_transactionhandler_transactionhandler__["a" /* TransactionhandlerProvider */]])
    ], ProductAddPage);
    return ProductAddPage;
}());

//# sourceMappingURL=product-add.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactionhandler_transactionhandler__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the BillpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillpopupPage = /** @class */ (function () {
    function BillpopupPage(navCtrl, navParams, transactionHandler, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionHandler = transactionHandler;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.addedItems = [];
        this.total = 0;
        this.customerDetails = [];
        this.cash = [];
    }
    BillpopupPage.prototype.saveorder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var addedProduct, postData, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addedProduct = [];
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
                        postData = {
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
                        return [4 /*yield*/, this.transactionHandler.saveorderAndPrint(postData)];
                    case 1:
                        response = _a.sent();
                        response.subscribe(function (response) {
                            if (response['_body']) {
                                var result = JSON.parse(response['_body']);
                                console.log(result);
                                if (result.IsSucess) {
                                    console.log(result.data);
                                    _this.print(result.data.Header._id);
                                }
                                else {
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BillpopupPage.prototype.print = function (orderid) {
        var _this = this;
        this.http.get('http://localhost:4000/api/print/recipt/' + orderid).subscribe(function (result) {
            console.log(result);
            var prod = JSON.parse(result['_body']);
            if (prod.IsSucess) {
                _this.showAlert("Recipt ", prod.Message);
                //this.products  = prod.data;
                console.log(prod.data);
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
            selector: 'page-billpopup',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\billpopup\billpopup.html"*/'<!--\n\n  Generated template for the BillpopupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-buttons start>\n\n      <button ion-button >\n\n        <ion-icon name="save"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n    <ion-title>Invoice</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only (click)="print()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button> -->\n\n      <button ion-button icon-only (click)="saveorder()">\n\n          <ion-icon name="print" ></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="container-fluid">\n\n    <div class="row no-gutters">\n\n      <div class="col">\n\n        <h1> Studo Salaru</h1>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="row no-gutters">\n\n      <div class="col">\n\n        <img src="../../assets/logotipo.svg" alt="logotipo" class="logotipo">\n\n      </div>\n\n\n\n      <div class="col">\n\n        <h2>Studio Salaru</h2>\n\n        <p>0777 123 499</p>\n\n        <div class="address">\n\n          <p>studiosalarucreation@gmail.com</p>\n\n          <p>No 47/1/A</p>\n\n          <p>Studio Salaru, Kurunegala Rd,</p>\n\n          <p>Katugastota</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="row no-gutters items-group">\n\n\n\n      <div>\n\n        <ion-item>\n\n          <ion-label color="primary" fixed>Name</ion-label>\n\n          <ion-input [(ngModel)]="customerDetails.name" type="text" placeholder="Full Name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" fixed>Phone</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="customerDetails.id" placeholder="Tel Input"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" fixed>Email Address</ion-label>\n\n          <ion-input type="email" [(ngModel)]="customerDetails.email" placeholder="Email Address"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="row no-gutters items-group">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>Item</ion-col>\n\n          <ion-col col-3>QTY</ion-col>\n\n          <ion-col col-3>Price</ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let item of addedItems">\n\n          <ion-col col-6>{{item.name}}</ion-col>\n\n          <ion-col col-3>{{item.qty}}</ion-col>\n\n          <ion-col col-3>{{item.netPrice}} </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div class="row no-gutters items-group">\n\n      <ion-grid>\n\n       \n\n        <ion-row >\n\n          <ion-col col-6>Grand Total</ion-col>\n\n          <ion-col col-6>{{total}}</ion-col>\n\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n\n        </ion-row>\n\n\n\n        <ion-row >\n\n          <ion-col col-6>Amount Recived</ion-col>\n\n          <ion-col col-6>\n\n            <ion-input type="number"\n\n            (input)="CalculateBalance()"\n\n           \n\n             [(ngModel)]="cash.recived" placeholder="Recived Amount"></ion-input>\n\n          </ion-col>\n\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n\n        </ion-row>\n\n\n\n        <ion-row >\n\n          <ion-col col-6>Amount Return</ion-col>\n\n          <ion-col col-6>\n\n            <ion-input type="number" \n\n            [disabled]="true"\n\n            [(ngModel)]="cash.return" placeholder="Return Amount"></ion-input>\n\n          </ion-col>\n\n          <!-- <ion-col col-3>{{item.price}} </ion-col> -->\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div class="row no-gutters items-group">\n\n      <div class="col">\n\n        <p class="label">Thank you:</p>\n\n        <ul class="disclaimer">\n\n          <li>Please keep this bill untill your product recived </li>\n\n          <li>if  there any issue or damage dont hasitate to contact us </li>\n\n          <li>please contact with our mobile number</li>\n\n          <!-- <li>O preço acresce 10% a cada 30 dias após fim do prazo de levantamento (taxa de conservação)</li>\n\n          <li>Os dados do cliente, acima mencionados, ficam registados na N Reparações apenas para efeitos de\n\n            comunicação\n\n            em relação às suas assistências e facturação\n\n          </li> -->\n\n        </ul>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="row no-gutters">\n\n      <div class="col">\n\n        <p class="disclaimer signature-field">Studio Salaru - By SimplePOS 03/02/2019</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\billpopup\billpopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_transactionhandler_transactionhandler__["a" /* TransactionhandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BillpopupPage);
    return BillpopupPage;
}());

//# sourceMappingURL=billpopup.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		285,
		3
	],
	"../pages/billpopup/billpopup.module": [
		286,
		2
	],
	"../pages/category/category.module": [
		287,
		0
	],
	"../pages/product-add/product-add.module": [
		288,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataaccessProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataaccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataaccessProvider = /** @class */ (function () {
    function DataaccessProvider(http) {
        this.http = http;
        console.log('Hello DataaccessProvider Provider');
    }
    DataaccessProvider.prototype.GET = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, requestOptions);
    };
    DataaccessProvider.prototype.POST = function (url, postData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, postData, requestOptions);
    };
    DataaccessProvider.prototype.PUT = function (url, postData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, postData, requestOptions);
    };
    DataaccessProvider.prototype.DELETE = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(url, requestOptions);
    };
    DataaccessProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataaccessProvider);
    return DataaccessProvider;
}());

//# sourceMappingURL=dataaccess.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ResourcesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResourcesProvider = /** @class */ (function () {
    function ResourcesProvider() {
        this.restAPIUrl = "http://localhost:4000/api/";
        this.OrderService = this.restAPIUrl + "order";
        this.ProductService = this.restAPIUrl + "product";
        this.ProductByCategoryId = this.restAPIUrl + "productByCategoryId";
        this.resources = {
            Order: {
                getOrder: this.OrderService,
                getOneOrder: this.OrderService,
                createOrder: this.OrderService,
            },
            Product: {
                getAllProduct: this.ProductService,
                getOneProduct: this.ProductService,
                getProductByCategoryId: this.ProductByCategoryId,
                createProduct: this.ProductService,
                updateProduct: this.ProductService,
                deleteProduct: this.ProductService
            }
        };
        console.log('Hello ResourcesProvider Provider');
    }
    ResourcesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResourcesProvider);
    return ResourcesProvider;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billpopup_billpopup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactionhandler_transactionhandler__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, alertCtrl, modalCtrl, transactionHandler) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.transactionHandler = transactionHandler;
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
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '', 'netPrice': 0 };
        this.total = 0;
        this.netQty = 0;
        this.netamount = 0;
        this.grandAmount = 0;
        this.discountAmount = 0;
        this.loaditems();
        this.selectCategory(1);
    }
    HomePage.prototype.loaditems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transactionHandler.getAllProduct()];
                    case 1:
                        products = _a.sent();
                        products.subscribe(function (result) {
                            console.log(result);
                            if (result.status == 200) {
                                var prod = JSON.parse(result['_body']);
                                if (prod.IsSucess) {
                                    _this.products = prod.data;
                                }
                            }
                            console.log(_this.products);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.selectProduct = function (item) {
        console.log(item);
        this.selectedProduct.productid = item._id;
        this.selectedProduct.name = item.Name;
        this.selectedProduct.price = item.Price;
        this.selectedProduct.qty = 1;
        this.selectedProduct.netPrice = parseFloat(this.selectedProduct.price) * this.selectedProduct.qty;
        this.netQty += 1;
        this.addeditems.push(this.selectedProduct);
        // var balance = parseFloat(this.selectedProduct.price) ;
        this.AddTotal(this.selectedProduct.netPrice);
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '', 'netPrice': 0 };
        // this.selectedProduct = item
    };
    HomePage.prototype.selectCategory = function (categoryid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(categoryid);
                        this.items = [];
                        return [4 /*yield*/, this.transactionHandler.getProductByCategoryId(categoryid)];
                    case 1:
                        response = _a.sent();
                        response.subscribe(function (result) {
                            console.log(result);
                            if (result.status == 200) {
                                var prod = JSON.parse(result['_body']);
                                if (prod.IsSucess) {
                                    _this.products = prod.data;
                                }
                            }
                            console.log(_this.products);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.additem = function () {
        this.selectedProduct.netPrice = parseFloat(this.selectedProduct.price) * this.selectedProduct.qty;
        this.addeditems.push(this.selectedProduct);
        var balance = parseFloat(this.selectedProduct.price) * this.selectedProduct.qty;
        this.AddTotal(balance);
        this.netQty += this.selectedProduct.qty;
        this.selectedProduct = { 'price': '', "qty": 0, "name": '', "productid": '', 'netPrice': 0 };
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
    HomePage.prototype.ChangeQuantity = function (item) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Quantity',
            message: "Enter Product Quantity",
            inputs: [
                {
                    name: 'qty',
                    placeholder: 'Qty',
                    value: item.qty
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        var itemIndex = _this.addeditems.indexOf(item);
                        _this.addeditems[itemIndex].qty = data.qty;
                        _this.addeditems[itemIndex].netPrice = data.qty * _this.addeditems[itemIndex].price;
                        _this.total = 0;
                        _this.addeditems.forEach(function (element) {
                            _this.total += element.netPrice;
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.updateQty = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-segment *ngFor="let item of itemcategories.categories" [(ngModel)]="icons" color="secondary">\n\n              <ion-segment-button value="{{item.ProductCategoryid}}" (click)="selectCategory(item.ProductCategoryid)">\n\n                <ion-icon name="{{item.icon}}"></ion-icon>\n\n                {{item.Name}}\n\n              </ion-segment-button>\n\n            </ion-segment>\n\n          </ion-row>\n\n          <ion-row>\n\n            <!-- <ion-col col-4>\n\n              <ion-item-group>\n\n                <ion-item-divider color="light">Items</ion-item-divider>\n\n                <ion-item *ngFor="let item of products" (click)="selectProduct(item)">{{item.Name}}</ion-item>\n\n               \n\n              </ion-item-group>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <h2>Item Detail</h2>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n\n\n                  <ion-col col-2>\n\n                    Name\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    {{selectedProduct.name}}\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n\n                    Qty\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <input type="text" [(ngModel)]="selectedProduct.qty" />\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n\n                    Price\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <input type="text" [(ngModel)]="selectedProduct.price" />\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-col> -->\n\n\n\n\n\n            <ion-col>\n\n\n\n              <div class="square-container">\n\n                <div class="square" (click)="selectProduct(item)" *ngFor="let item of products">\n\n                  <div class="content">{{item.Name}}</div>\n\n                </div>\n\n\n\n                \n\n              </div>\n\n            </ion-col>\n\n\n\n          </ion-row>\n\n         </ion-grid>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <h1>Bill</h1>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-list style="max-height: 40vh;overflow: auto">\n\n                <ion-item>\n\n                  <ion-row>\n\n                    <ion-col col-4>Name</ion-col>\n\n                    <ion-col col-2 >Qty</ion-col>\n\n                    <ion-col col-2>Price</ion-col>\n\n                  </ion-row>\n\n                </ion-item>\n\n                <ion-item *ngFor="let item of addeditems">\n\n                  <ion-row>\n\n                    <ion-col col-4>{{item.name}}</ion-col>\n\n                    <ion-col col-2 (click)="ChangeQuantity(item)">{{item.qty}}</ion-col>\n\n                    <ion-col col-2>{{item.netPrice}} RS</ion-col>\n\n                  </ion-row>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="removeitems()">Clear</button>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Net Qty\n\n            </ion-col>\n\n            <ion-col>\n\n              {{netQty}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Net Total\n\n            </ion-col>\n\n            <ion-col>\n\n              {{totaln  }}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              Discount\n\n            </ion-col>\n\n            <ion-col>\n\n              15%\n\n            </ion-col>\n\n          </ion-row>\n\n          <hr>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2> Grand Total</h2>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h2>{{grandAmount + total }} Rs</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button full (click)="discount()">Discount</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="SaveOrder()">Save</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button full (click)="Save()">Cancel</button>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\yasuracreation\Desktop\banquat Managemennt system\BQapp\SimplePOS\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_transactionhandler_transactionhandler__["a" /* TransactionhandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_transactionhandler_transactionhandler__["a" /* TransactionhandlerProvider */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_billpopup_billpopup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_printer_ngx__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_transactionhandler_transactionhandler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_resources_resources__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dataaccess_dataaccess__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__ = __webpack_require__(278);
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_transactionhandler_transactionhandler__["a" /* TransactionhandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_resources_resources__["a" /* ResourcesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_dataaccess_dataaccess__["a" /* DataaccessProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__["a" /* StorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(204);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionhandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataaccess_dataaccess__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_resources__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TransactionhandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TransactionhandlerProvider = /** @class */ (function () {
    function TransactionhandlerProvider(dataAccess, resourceUrl) {
        this.dataAccess = dataAccess;
        this.resourceUrl = resourceUrl;
        console.log('Hello TransactionhandlerProvider Provider');
    }
    TransactionhandlerProvider.prototype.saveorderAndPrint = function (postParams) {
        return this.dataAccess.POST(this.resourceUrl.resources.Order.createOrder, postParams);
    };
    TransactionhandlerProvider.prototype.addnewProduct = function (productDto) {
        return this.dataAccess.POST(this.resourceUrl.resources.Product.createProduct, productDto);
    };
    TransactionhandlerProvider.prototype.updateProduct = function (procuctId, productDto) {
        return this.dataAccess.PUT(this.resourceUrl.resources.Product.updateProduct + "/" + procuctId, productDto);
    };
    TransactionhandlerProvider.prototype.getAllProduct = function () {
        return this.dataAccess.GET(this.resourceUrl.resources.Product.getAllProduct);
    };
    TransactionhandlerProvider.prototype.getProductByCategoryId = function (categoryid) {
        return this.dataAccess.GET(this.resourceUrl.ProductByCategoryId + "/" + categoryid);
    };
    TransactionhandlerProvider.prototype.deleteProduct = function (productId) {
        return this.dataAccess.DELETE(this.resourceUrl.resources.Product.deleteProduct + "/" + productId);
    };
    TransactionhandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataaccess_dataaccess__["a" /* DataaccessProvider */], __WEBPACK_IMPORTED_MODULE_2__resources_resources__["a" /* ResourcesProvider */]])
    ], TransactionhandlerProvider);
    return TransactionhandlerProvider;
}());

//# sourceMappingURL=transactionhandler.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map