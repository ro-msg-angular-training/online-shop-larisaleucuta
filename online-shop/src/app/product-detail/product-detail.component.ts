import { Component, OnInit, DebugEventListener, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
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
    if (this.showModal)
      this.showModal = false;
    else
      this.showModal = true;
  }
}
