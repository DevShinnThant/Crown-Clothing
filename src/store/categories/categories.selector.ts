import { createSelector } from "reselect";

import { categoriesState } from "./categories.reducer";
import { Category, CategoryMap } from "./categories.types";

const selectCategoryReducer = (state): categoriesState => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesReducer): Category[] => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectLoading = createSelector(
  [selectCategoryReducer],
  (categories) => {
    return categories.loading;
  }
);
