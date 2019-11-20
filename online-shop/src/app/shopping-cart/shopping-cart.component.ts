import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void{
    this.productService.getProducts().subscribe(products=>this.products=products);
  }
}
