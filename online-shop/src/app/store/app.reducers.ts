import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app.state';
import {routerReducer} from '@ngrx/router-store';
import {productReducer} from './product.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  products: productReducer,
};
