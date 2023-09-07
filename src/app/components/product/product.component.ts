import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

   products: Product[] = [];
  apiUrl ="https://localhost:44378/api/Products/getall";
  productResponseModel:ProductResponseModel={

  }


constructor(private httpClient:HttpClient){};

getProducts(){
  this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe(Response=>{
    this.products=Response
  });
 }
}


