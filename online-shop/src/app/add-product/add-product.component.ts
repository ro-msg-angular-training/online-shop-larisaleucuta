import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import {Store} from '@ngrx/store';
import * as ProductActions from '../store/product.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  products: Product[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
              private store: Store<{ Product: { products: Product[] } }>) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string, category: string, price: number, image: string, description: string): void {
    if (!name && !category && !price && !image && !description) { return; }
    // this.productService.addProduct({ name, category, price, image, description } as Product)
    //   .subscribe(() => this.goBack(), product => {
    //     this.products.push(product)
    //   });
    this.store.dispatch(new ProductActions.AddProduct( new Product(45,name,category,price,image,description)) )
  }
}
