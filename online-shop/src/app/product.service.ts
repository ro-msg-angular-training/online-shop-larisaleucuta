import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private productsUrl = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  updateProduct(product: Product, productId: number): Observable<any> {
    return this.http.put('http://localhost:3000/products/' + productId, product, this.httpOptions);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/products/' + product.id, this.httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }

}
