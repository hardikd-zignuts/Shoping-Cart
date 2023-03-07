import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../common/CartItem";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  return (
    <>
      <h4 className="text-light">Your Shopping Cart</h4> <hr />
      <div>
        {cartData.length !== 0 ? (
          cartData.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })
        ) : (
          <h6 className="text-light">Cart Empty</h6>
        )}
      </div>
    </>
  );
};

export default Cart;
