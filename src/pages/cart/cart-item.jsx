import React from 'react';
import { useContext } from 'react';
import { shopContext } from '../../context/context-shop';


export const CartItem = (props) => {

    const {id,productName,price,productImage} = props.data;
    const {cartItems, addToCart, removeFromCart } = useContext(shopContext);

  return (
  <div className='cartItem'>
    <img src={productImage}/>
    <div className='description'>
       <p> 
        <b> {productName} </b>
        </p>
        <p>
            Rs:{price}
        </p>
        <div className='countHandler'>
          <button onClick={()=> removeFromCart(id)}> - </button>
          <input value={cartItems[id]}/>
          <button onClick={()=> addToCart(id)}> + </button>
        </div>
    </div>
  </div>
  );
  
}
