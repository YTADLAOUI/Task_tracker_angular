import { createAction, props } from '@ngrx/store';

export const getSearch = createAction('[Header Component] Search', props<{ search: string }>());