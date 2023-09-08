import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';

import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44378/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"Products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
