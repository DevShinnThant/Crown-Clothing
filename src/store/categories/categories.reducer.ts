import { AnyAction } from "redux";
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categories.action";
import { Category } from "./categories.types";

export type categoriesState = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: categoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      loading: true,
    };
  }
  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      categories: action.payload,
      loading: false,
    };
  }
  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }
  return state;
};
