import React from "react";

const Item = (props) => {
  return (
    <div className="w-80 hover:scale-105 transition[0.6s] ">
      <img src={props.image} />
      <p className="my-1">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-lg font-semibold ">
          $ {props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through ">
          $ {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
