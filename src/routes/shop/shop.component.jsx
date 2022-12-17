import { useContext } from "react";

import './shop.styles.scss';

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/products.context";

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <div className="products-container">
        {
          categoriesMap.map((product)=>{
            return (
                <ProductCard key={product.id} product={product}/>
            )
          })
        }
        </div>
    )
}
export default Shop;