import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products : [],
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {
    const [products,setProducts] = useState([]);

    const value = {products,setProducts};

    return (<ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>)
}