import { useContext,Fragment } from "react";

import './shop.styles.scss';

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
      <Fragment>
      {
         Object.keys(categoriesMap).map((title)=>{
          return (
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className="products-container">
              {
                 categoriesMap[title].map((product)=>{
                    return (
                    <ProductCard key={product.id} product={product}/>
                   )
                  })
              }
              </div>
            </Fragment>
          )
         })

      }
      </Fragment>
        
    )
}
export default Shop;