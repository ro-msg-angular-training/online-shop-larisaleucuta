import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.usersUrl + 'login');
  }

  delete(id: number) {
    return this.http.delete(this.usersUrl + 'login');
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + 'users/' + username);
  }
}
