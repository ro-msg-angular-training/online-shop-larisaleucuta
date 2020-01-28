import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {User} from '../user';
import {UserService} from '../user.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {productReducer} from '../store/product.reducer';
import * as ProductsActions from '../store/product.actions';
import {selectProductList} from '../store/products.selector';
import {AppState} from '../store/app.state';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Observable<{products: Product[]}>;
  roles: string[] = [];
  isAdmin = false;
  products$ = this.store.pipe(select(selectProductList));

  constructor(private productService: ProductService,
              private userService: UserService,
              private store: Store<AppState>,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new ProductsActions.GetProducts());
    // this.getProducts();
    this.admin();
  }

  admin() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => {
      this.roles = user.roles;
      user.roles.find(role => {
        if (role === 'admin') {
          this.isAdmin = true;
        }
      });
      return true;
    });
  }


  // getProducts(): void {
  //   this.productService.getProducts().subscribe(products => this.products = products);
  // }
}
