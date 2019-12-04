import {Component, OnInit, DebugEventListener, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {CartService} from '../cart.service';
import {Cart} from '../cart';
import {UserService} from '../user.service';
import {EMPTY} from 'rxjs';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  showModal = false;
  cart: Cart[] = [];
  empty = [];
  roles: string[] = [];
  isAdmin = false;
  user = localStorage.getItem('username');

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
    this.admin();
  }

  getProduct(): void {
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product).subscribe(() => this.goBack());

  }

  modalFunction(): void {
    if (this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }
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

  addToCart() {
    const id = this.route.snapshot.params.id;
    this.userService.getUser(this.user).subscribe(user => {
      this.cart = user.cart;


      let a = 0;
      this.cart.find(prod => {
        if (prod.productID == id) {
          prod.quantity++;
          a = 1;
        }
      });
      if (!a && this.cart != this.empty) {
        this.cart.push({productID: id, quantity: 1});
      }

      this.cartService.postCart(this.user, this.cart).subscribe();
      location.reload(true);
    });
  }
}
