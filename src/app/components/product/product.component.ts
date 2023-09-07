import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    ngOnInit(): void {
    this.getProducts();
    }

  products: Product[] = [];
  apiUrl ="https://localhost:44378/api/Products/getall";
  constructor(private httpClient:HttpClient){};

getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe(response=>{
    this.products =response.data
  });
 }
}


