import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {  }

  ngOnInit() {
    this.getProducts();

    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      image: new FormControl(''),
      price: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required])
    });

    this.productService.getProduct(this.route.snapshot.params.id).subscribe(product => {
      this.product = product
      this.productForm.setValue({
        name: this.product.name,
        category: this.product.category,
        image: this.product.image,
        price: this.product.price,
        description: this.product.description
      })
    });
  }

  

  getProducts(): void {
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.productForm.value , this.product.id).subscribe(() => this.goBack());
  }

  
}
