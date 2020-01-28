import {Product} from '../product';

export interface ProductsState{
  products: Product[];
  selectedProduct:Product;
}

export const initialProductState: ProductsState={
  products: null,
  selectedProduct: null
};
