import {Action} from '@ngrx/store';
import {Product} from '../product';

export enum ProductsActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCT = 'GET_PRODUCT',
  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
}

export const ADD_PRODUCT = 'ADD_PRODUCT';

export class AddProduct implements Action {
  readonly type = ProductsActions.ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class GetProducts implements Action{
  readonly  type= ProductsActions.GET_PRODUCTS;

}
export class GetProductsSuccess implements Action{
  readonly  type= ProductsActions.GET_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){};
}

export class GetProduct implements Action{
  readonly  type= ProductsActions.GET_PRODUCT;
  constructor(public payload:number){};
}
export class GetProductSuccess implements Action{
  readonly  type= ProductsActions.GET_PRODUCT_SUCCESS;
  constructor(public payload:Product){};
}

export type ProductActions= AddProduct | GetProduct| GetProducts | GetProductsSuccess | GetProductSuccess;



