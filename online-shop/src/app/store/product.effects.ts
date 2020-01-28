import {Injectable} from '@angular/core';

import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {AppState} from './app.state';
import {switchMap, map, withLatestFrom, mergeMap} from 'rxjs/operators';
import {GetProductSuccess, ProductActions, GetProductsSuccess, GetProducts, GetProduct, ProductsActions} from './product.actions';
import {ProductService} from '../product.service';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductEffects {
  constructor(private actions$:Actions,
              private store: Store<AppState>,
              private http: HttpClient,
              private productService: ProductService){}
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(ProductsActions.GET_PRODUCTS),
    mergeMap(()=> this.productService.getProducts()
      .pipe(
      map(products=>({ type: ProductsActions.GET_PRODUCTS_SUCCESS, payload: products}))
    )
    )
  );
}
