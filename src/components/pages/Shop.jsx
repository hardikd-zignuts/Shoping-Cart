import React from "react";
import ProductData from "../../constant/ProductData";
import ShopItem from "../common/ShopItem";

const Shop = () => {
  return (
    <>
      <div>
        {ProductData.map(({ id, price, description, title }) => {
          return (
            <ShopItem
              key={id}
              id={id}
              price={price}
              description={description}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
