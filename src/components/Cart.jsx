import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
//   const cartData = useSelector((state) => state.cartData);
  return (
    <>
      <h1 className="text-light">Your Cart</h1> <hr />
      <div>
        {/* {cartData.length !== 0 ? (
          cartData.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })
        ) : (
          <h4 className="text-light">Cart Empty</h4>
        )} */}
      </div>
    </>
  );
};

export default Cart;