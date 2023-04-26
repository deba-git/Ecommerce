import React from 'react' ;
import { PRODUCTS } from '../../products';
import { shopContext } from '../../context/context-shop';
import { useContext } from 'react';
import { CartItem } from './cart-item';

import {useNavigate } from 'react-router-dom';


export const Cart = () => {
 const {cartItems } = useContext(shopContext);


const navigate = useNavigate();
  return (
    <div className='cart'>
      <div> 
       <h1> Cart Items </h1>
        </div>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if(cartItems [product.Id] !== 0){
              return <CartItem data={product}/>
            }
          })}

          <div className="checkout">
            <p> Subtotal : Rs:</p>
            <button onClick={() => navigate("/")}> Continue Shoping </button>
          </div>

        </div>
    </div>
  )
}
