import { createContext, useEffect, useReducer, useState } from "react";

import { addCollectionAndDocuments,getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap : [],
    setCategoriesMap: () => null
});

const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES_MAP : 'SET_CATEGORIES_MAP'
};

const categoriesReducer = (state,action) => {
  const {type,payload} = action;
  
  switch(type){
    case 'SET_CATEGORIES_MAP' :
      return {
        ...state,
        categoriesMap:payload
      };
    default : 
      throw new Error('Unhandle type with category reducer')
  }
};

const INITIAL_STATE = {
  categoriesMap : [],
};


export const CategoriesProvider = ({children}) => {
    const [{categoriesMap},dispatch] = useReducer(categoriesReducer,INITIAL_STATE)
 
    const setCategoriesMap = (categories) => {
      dispatch({type:CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,payload:categories})
    };

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