import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import {
  selectCategoriesMap,
  selectLoading,
} from "../../store/categories/categories.selector.ts";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const loading = useSelector(selectLoading);

  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
