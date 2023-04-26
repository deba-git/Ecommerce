import React from "react";
import { PRODUCTS } from "../../products";
import { shopContext } from "../../context/context-shop";
import { useContext } from "react";
import { Item } from "../../components/Item";
import './cart.css';

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const shopData = useContext(shopContext);
  const { cartItems, getTotalPrice } = shopData || {};
  const navigate = useNavigate();

  return !!shopData && (
    <div className="cart">
      <div>
        <h1> Cart Items </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] === 0) {
            return '';
          }
          else {
            return <Item data={product} key={product.id} />;
          }
        })}
      </div>
      <div className="checkout">
          <p> Subtotal: ₹{getTotalPrice()}</p>
          <button onClick={() => navigate("/")}> Continue Shoping </button>
        </div>
    </div>
  );
};
