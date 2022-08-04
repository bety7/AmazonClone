import React from 'react'
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
  const [{basket},dispatch]= useStateValue();
  return (
<div className="checkout">
<div className="checkout_left">
<img class="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
 <h3>Hello</h3>
<h2 className="checkout_title">Your shopping Basket</h2> 
{basket.map((item)=>(
<CheckOutProduct 
  id={item.id}
  title={item.title}
  image={item.image}
  price={item.price}
  rating={item.rating} 
/>
))}
        </div>
<div className="checkout_right">
<Subtotal/>
</div>
    </div>
  )
}

export default Checkout;