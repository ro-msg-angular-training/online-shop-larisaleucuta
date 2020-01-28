import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
import {User} from './user';
import {Cart} from './cart';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url + 'orders', order, this.httpOptions);
  }


}



