import React, {useState} from "react";
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Home from './Home.js';
import App from "./App.js";
import Login from './Login.js';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

function Header({placeholder, Product}) {

  const [filterData, setFilteredData] = useState([]);
  

const handleFilter = (e) => {
 const searchWord = e.target.value;
 const newFilter = Product.filter((value) => {
   return value.title.toLowerCase().includes(searchWord.toLowerCase());
 });

 if(searchWord === "") {
     setFilteredData([]);
 } else {
     setFilteredData(newFilter);
 }
};

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  return (
       <div>
               <nav className="header">
         <h1>Just Watches</h1><span className="header-title"><h3>Shop Better</h3></span>

         <div className="header__search" >
          <input type="text" className="header__searchInput" />
          {filterData.lenght === 0 ? (
              <SearchIcon className="header__searchIcon" /> 
          ) : (
            <SearchIcon className="header__searchIcon" /> 
          )}
          {filterData.length != 0 && (
            <div>
          {filterData.slice(0,15).map((value,key) => {
            return(
              <a href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
          </div> 
          )}
        
         
         </div>
         <div className="header__nav">
           
         <Link to={!user && "/login"} className="header__link">
           <div onClick={handleAuthentication} className="header__option">
           <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
             <span className="header__optionLinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
           </div>
           </Link>
           <Link to="/" className="header__link">
           <div className="header__option">
             
           </div>
           </Link>

           <Link to="/checkout" className="header__link">
             <div className="header__optionBasket">
               <ShoppingBasketIcon />
               <span className="header__optionLineTwo header__basketCount">
                 {basket?.length}
                 </span>

             </div>
           </Link>
           
           
         </div>
        
       </nav>
       <Home />
       </div>
 
    

  )
}

export default Header