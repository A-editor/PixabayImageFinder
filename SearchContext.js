import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [imageData, setImageData] = useState([]);
  const [imageFocus, setImageFocus] = useState({});

  return (
    <SearchContext.Provider
      value={{ imageData, setImageData, imageFocus, setImageFocus }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

module.exports = {
  SearchContextProvider,
  SearchContext,
};
