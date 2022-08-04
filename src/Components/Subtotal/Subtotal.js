import React from 'react';
import './Subtotal.css'
import NumberFormat from "react-number-format";
import { useStateValue } from '../StateProvider/StateProvider';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
function Subtotal() {
    const [{basket},dispatch]= useStateValue();
    const navigate = useNavigate();
    //  const history = useHistory();
    const getBasketTotal=(basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0)
   
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value)=>(
            <div>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
            </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        tsousandSeparator={true}
        prefix={'$'}
        />  
        <button onClick={(e) => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal;