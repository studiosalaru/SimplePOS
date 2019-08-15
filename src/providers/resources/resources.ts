import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ResourcesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResourcesProvider {
  restAPIUrl = "http://localhost:4000/api/";
  OrderService:string = this.restAPIUrl+"order";
  ProductService:string = this.restAPIUrl+"product"
  ProductByCategoryId = this.restAPIUrl+"productByCategoryId"
  constructor() {
    console.log('Hello ResourcesProvider Provider');
  }
  public resources={
    Order:{
      getOrder:this.OrderService,
      getOneOrder:this.OrderService,
      createOrder:this.OrderService,

    },
    Product:{
      getAllProduct:this.ProductService,
      getOneProduct:this.ProductService,
      getProductByCategoryId:this.ProductByCategoryId,
      createProduct:this.ProductService,
      updateProduct:this.ProductService,
      deleteProduct:this.ProductService


    }
  }
}
