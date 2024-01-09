import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromAPi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCatgories, setSelectCagories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCatgories);
  }, [selectCatgories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true)
    fetchDataFromAPi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents)
        setSearchResults(contents);
        setLoading(false)
    })
    
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        mobileMenu,
        setMobileMenu,
        setSelectCagories,
        selectCatgories,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
