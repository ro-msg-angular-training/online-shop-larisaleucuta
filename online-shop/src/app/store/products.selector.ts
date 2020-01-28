import {createSelector} from '@ngrx/store';

import {AppState} from './app.state';
import{ ProductsState} from './products.state';
const selectProducts =(state:AppState)=>state.products;

export const selectProductList = createSelector(
  selectProducts,
  (state: ProductsState)=> state.products
);

export const selectSelectedProduct = createSelector(
  selectProducts,
  (state: ProductsState)=>state.selectedProduct
);
