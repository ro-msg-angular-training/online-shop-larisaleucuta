import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online shop';
  currentUser: User;

  constructor(private http: HttpClient, private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }

  // tslint:disable-next-line:use-lifecycle-interface
   ngOnInit() {
      this.http.get('http://localhost:3000/products').
      subscribe((data) => console.log(data));
   }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
