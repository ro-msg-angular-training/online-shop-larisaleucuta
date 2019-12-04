import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {LoginComponent} from './login/login.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    EditProductComponent,
    AddProductComponent,
    ShoppingCartComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
