import {ProductActions, ProductsActions} from './product.actions';
import {initialProductState, ProductsState} from './products.state';


export const productReducer = (state = initialProductState, action: ProductActions): ProductsState => {
  switch(action.type){
    case ProductsActions.GET_PRODUCTS_SUCCESS:{
      return {
        ...state,
        products :action.payload
      };
    }
    case ProductsActions.GET_PRODUCT_SUCCESS:{
      return {
        ...state,
        selectedProduct: action.payload
      };
    }
    default:
      return state;
  }
};
