import React from "react";
import new_collection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-24 uppercase ">
      <h1 className="text-[#171717] font-semibold text-5xl">New Collections</h1>
      <hr className="h-2 w-48 rounded-lg bg-[#252525]" />
      <div
        className="grid mt-12 gap-7 "
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {new_collection.map((item, i) => {
          {
            /* console.log(item); */
          }
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;
