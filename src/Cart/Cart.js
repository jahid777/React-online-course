import React from 'react';

const Cart = (props) => {
  const cart = props.cart;

  
  let total = 0;
  for( let i=0; i < cart.length; i++){
     const course = cart[i]
     total = total + course.price;
     total.toFixed(2);
  }


return (
<div>
   <h3>CART SUMMARY: {cart.length}</h3>
   <h3>PRICE: {total.toFixed(2)}</h3>
   
       <ol>
       {
         cart.map(m => <li>{m.title}</li>)                         
       }                      
       </ol>            
</div>
);
};

export default Cart;