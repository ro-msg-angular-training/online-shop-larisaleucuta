import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'shopping', component: ShoppingCartComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'detail/:id', component: ProductDetailComponent, canActivate: [AuthGuardService]},
  { path: 'edit/:id', component: EditProductComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuardService]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
