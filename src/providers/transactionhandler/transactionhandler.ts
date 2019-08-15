import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataaccessProvider } from '../dataaccess/dataaccess';
import { ResourcesProvider } from '../resources/resources';

/*
  Generated class for the TransactionhandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionhandlerProvider {

  constructor(public dataAccess: DataaccessProvider,private resourceUrl:ResourcesProvider) {
    console.log('Hello TransactionhandlerProvider Provider');
  }
  saveorderAndPrint(postParams) {
    return this.dataAccess.POST(this.resourceUrl.resources.Order.createOrder, postParams)
  }

  addnewProduct(productDto) {
    return this.dataAccess.POST(this.resourceUrl.resources.Product.createProduct,productDto)
  }
  updateProduct(procuctId,productDto){
    return this.dataAccess.PUT(this.resourceUrl.resources.Product.updateProduct+"/"+procuctId,productDto)
  }
  getAllProduct() {
    return this.dataAccess.GET(this.resourceUrl.resources.Product.getAllProduct)
  }
  getProductByCategoryId(categoryid) {
    return this.dataAccess.GET(this.resourceUrl.ProductByCategoryId+"/"+categoryid);
  }
  deleteProduct(productId){
    return this.dataAccess.DELETE(this.resourceUrl.resources.Product.deleteProduct+"/"+productId);

  }

}
