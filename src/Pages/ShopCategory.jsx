import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img
        src={props.banner}
        alt="banners"
        className="block w-4/5 "
        style={{ margin: "30px auto" }}
      />
      <div className="flex my-40 justify-between items-center ">
        <p>
          <span className="font-semibold ">Showing 1-12</span> out of 36 product
        </p>
        <div
          className="px-1 py-3"
          style={{ borderRadius: "10px", border: "1px solid #888" }}
        >
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div
        className="mx-5 my-40 grid"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", rowGap: "80px" }}
      >
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div
        className="flex justify-center items-center w-60 h-16 bg-[#ededed] text-[#787878] text-lg font-medium "
        style={{ margin: "150px auto", borderRadius: "75px" }}
      >
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
