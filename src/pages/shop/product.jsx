import React, { useContext } from 'react';
import { shopContext } from '../../context/context-shop';


export const Product = (props) => {

const {id,productName,price,productImage} = props.data;
const {addtoCart , cartItems } = useContext(shopContext);

 const cartItemAmount = cartItems[id];
//   return <div>{productName}</div>
return <div className='structure'>
    <img src={productImage}/>
    
    <div className='description'>
     <p>
       <b>{productName}</b>
    </p>
    <p><b>Rs:</b>{price}</p>
    </div>
    <button className='addToCart' onClick={() => addtoCart(id)}>Add to Cart</button>
</div>
  
}
