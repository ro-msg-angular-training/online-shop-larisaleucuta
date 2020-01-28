import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  postCart(username: string, cart: Cart[]) {
    return this.http.patch(this.url + 'users/' + username, {cart}, this.httpOptions);
  }


}
