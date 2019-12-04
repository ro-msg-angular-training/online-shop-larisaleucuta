import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Cart} from '../cart';
import {Order} from '../order';
import {OrderService} from '../order.service';
import {UserService} from '../user.service';
import {CartService} from '../cart.service';
import {debug} from 'util';
import {findIndex} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  product: Product;
  cart: Cart[] = [];
  productList: Product[] = [];
  myModal = false;
  user = localStorage.getItem('username');
  order: Order = {
    cart: this.cart, customer: this.user
  };

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private userService: UserService,
              private cartService: CartService,
              private authenticationService:AuthenticationService
  ){}

  ngOnInit() {
    this.authenticationService.isLoggedIn=true;
    this.getUserCart(this.user);
  }

  getUserCart(username: string) {
    this.userService.getUser(username).subscribe(
      user => {
        this.cart = user.cart;
        this.cart.forEach(product => this.productService.getProduct(product.productID).subscribe(a => this.productList.push(a)));
      });
  }

  removeProduct(id:number) {
     this.cart.forEach(prod=> {
       if(prod.productID == id) {
         this.cart.splice(this.cart.indexOf(prod), 1);
     }
    location.reload(true);
    this.cartService.postCart(this.user, this.cart).subscribe();
     });
  }

  increaseQuantity(id:number) {
    let quantity = this.getQuantity(id);
    this.cart.find(cantit => {
      if (cantit.productID == id) {
        cantit.quantity = quantity + 1;
      }
    });
    this.cartService.postCart(this.user, this.cart).subscribe();
  }

  decreaseQuantity(id:number){
    let quantity=this.getQuantity(id);
    this.cart.find(cantit=>{
      if(cantit.productID==id && quantity>1){
        cantit.quantity= quantity-1;
      }
    });
    this.cartService.postCart(this.user, this.cart).subscribe();
  }

  getQuantity(id:number): number{
    let quantity=1;
    this.cart.find(a=>{
      if(a.productID == id) {
        quantity = a.quantity;
      }
    });
    return quantity;
  }

  showModal() {
    this.myModal = !this.myModal;
  }

  sendOrder() {
    this.order.cart = this.cart;
    this.orderService.postOrder(this.order).subscribe();
    this.cart=[];
    this.cartService.postCart(this.user, this.cart).subscribe();
  }

  ngOnDestroy() {
    this.cartService.postCart(this.user, this.cart).subscribe();
  }


}
