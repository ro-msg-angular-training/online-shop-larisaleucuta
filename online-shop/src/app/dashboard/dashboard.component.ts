import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {User} from '../user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  roles: string[]=[];
  isAdmin = false;


  constructor(private productService: ProductService,
              private userService: UserService) {}

  ngOnInit() {
    this.getProducts();
    this.admin();
  }

  admin(){
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => {
      this.roles = user.roles;
        user.roles.find(role=> {
          if (role === 'admin')
            this.isAdmin=true;
        });
      return true;
    });
  }



  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
