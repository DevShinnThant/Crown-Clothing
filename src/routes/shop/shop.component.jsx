import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div>
        {
          products.map((product)=>{
            return <h2>{product.name}</h2>
          })
        }
        </div>
    )
}
export default Shop;