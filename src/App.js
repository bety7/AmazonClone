import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { auth } from './firebase';
import Payment from './Components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Components/Orders/Orders';
const promise = loadStripe(
  'pk_test_51LKp6IFl1RvnoASNgwIhFShFrBLJMvyRGemKgzRbxRLfPYX01lW7Un3NJ8DVby8R9PM31GXJ2KlHGxcSBYu7WHhc00sEQ6a3DC'
);

function App() {
	const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // <Router>
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={
						<>
						<Header />
						<Home />
						</>
					}
					/>
           <Route path="/Orders" element={
          <>
          <Header />
          <Orders />
          </>
          }
					/>
		<Route path="/Login" element={<><Login /></>}
					/>
         
          <Route path="/Payment" element={
						<>
            <Elements stripe={promise}>
              	<Payment />
            </Elements>
						</>
					}
					/>
					<Route path="/Checkout" element={
						<>
						<Header />
						<Checkout />
						</>
					}
					/>
          </Routes>
          </Router>
      </div>
    
  );
}

export default App;
