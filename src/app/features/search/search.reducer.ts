import { createReducer, on } from '@ngrx/store';
import { getSearch } from './search.actions';


export const initialState = '';


export const searchReducer = createReducer(
  initialState,
  on(getSearch, state => state)
);