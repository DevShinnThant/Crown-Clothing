import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
   
    const {category} = useParams();

    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
       setProducts(categoriesMap[category]);
    },[category,categoriesMap])
 
    console.log(products);

    return (
        <Fragment>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {products &&
               products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
         </CategoryContainer>
      </Fragment>
    )
}
export default Category;