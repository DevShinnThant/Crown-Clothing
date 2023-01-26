import { CategoryAction } from "./categories.action";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

export type CATEGORY_STATE = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CATEGORY_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
