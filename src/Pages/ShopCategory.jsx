import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { dropdown_icon } from "../Components/assets/dropdown_icon.png";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img src={props.banner} alt="banners" />
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
