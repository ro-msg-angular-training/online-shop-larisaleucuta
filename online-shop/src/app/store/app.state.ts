import { ProductsState,initialProductState} from './products.state';
import { RouterReducerState} from '@ngrx/router-store';

export interface AppState{
  router?: RouterReducerState,
  products:ProductsState;
}

export const initialAppState: AppState={
  products:initialProductState
};
export function getInitialState(): AppState{
  return initialAppState;
}
