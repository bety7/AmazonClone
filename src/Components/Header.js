 import  React from 'react';
 import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider/StateProvider';
import { auth } from '../firebase';
  function Header() {
const [{basket,user},dispatch]= useStateValue();
const handleAuthentication =()=>{
    if (user) {
        auth.signOut();
    }
};

   return (
     <div className="header">
        <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="header_search"> 
        <input className="header_searchInput" type="text"/>
        <SearchIcon className="header_SearchIcon"/>
        </div>

        <div className="header-nav">
            <Link to={!user && "/login"} className="header_clearLink">
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionLineOne">Hello {!user ? 'Guest' :user.email}</span>
                 
                <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                
            </div>
            </Link>
            <Link to='/Orders' className="header_clearLink">
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">&Orders</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to="/Checkout">
            <div className="header_OptionBasket">
       <ShoppingBasketIcon/>
<span className="header_optioneTwo header_basketCount">{basket.length}</span>
            </div>
            </Link>
        </div>
     </div>
   )
 }
 
export default Header;