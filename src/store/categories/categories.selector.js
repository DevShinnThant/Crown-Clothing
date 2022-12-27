import { createSelector } from "reselect";
import { categoriesReducer } from "./categories.reducer";

const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesReducer) => categoriesReducer.categories 
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc,category)=>{
    const {title,items}  = category;
    acc[title.toLowerCase()] = items;
    return acc;
},{})
);

export const selectLoading = createSelector(
  [selectCategoryReducer],
  (categories) => {
    console.log(categories);
    return categories.loading
  }
)