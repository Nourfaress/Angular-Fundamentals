import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Product } from "../models/Product";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.jsonURL);
}
}
