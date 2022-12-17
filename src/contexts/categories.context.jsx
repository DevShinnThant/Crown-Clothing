import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments,getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap : [],
    setCategoriesMap: () => null
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState([]);

    const value = {categoriesMap,setCategoriesMap};

    useEffect(()=>{
      const getCategories = async () => {
      const categoriesMap = await getCollectionAndDocuments();
      setCategoriesMap(categoriesMap);
      };
      getCategories();
    },[])

    return (<CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>)
}