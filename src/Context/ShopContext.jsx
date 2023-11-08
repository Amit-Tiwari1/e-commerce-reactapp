import React, { createContext } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  // anyfunction can send
  // or any variable can also send

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
