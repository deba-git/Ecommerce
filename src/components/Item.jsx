import React from "react";
import { useContext } from "react";
import { shopContext } from "../context/context-shop";

export const Item = (props) => {
  const { id, productName, price, productImage } = props.data;
  const shopData = useContext(shopContext);
  const { cartItems, addToCart, removeFromCart } = shopData || {};

  return (
    !!shopData && (
      <div className="cartItem">
        <img src={productImage} alt="" width={100} height={250} />
        <div className="description">
          <p>
            <b> {productName} </b>
          </p>
          {cartItems[id] > 0 ? (
            <>
              <p>Price: ₹{price * cartItems[id]}</p>
              <div className="countHandler">
                <button
                  onClick={() => removeFromCart(id)}
                  disabled={cartItems[id] === 0}
                >
                  -
                </button>
                <input value={cartItems[id]} disabled />
                <button onClick={() => addToCart(id)}>+</button>
              </div>
            </>
          ) : (
            <>
              <p>₹{price}</p>
              <button className="addToCart" onClick={() => addToCart(id)}>
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
};
