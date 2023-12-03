

import React from 'react';
import Brands from "./Promotion"
import Cards from "./Offers"
import Prefer from "./prefer"
// import Form from "./login"
import Location from './Review';

import Last from './last';

import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='container'>
    <div className="navbar">
      <div className="logo">
        <img src="logo.jpg" alt="Logo" />
        <h6>BookStore</h6>
      </div>
      <ul className="nav-links">
        <li><Link to="#">HOME</Link></li>
        {/* <li><Link to="/Shop">SHOP</Link></li> */}

        <li><a href="#SERVICES">EXPLORE OFFERS</a></li>
        
        <li><a href="#PROMOTIONS">PROMOTIONS</a></li>
        <li><a href="#ABOUT">REVIEWS</a></li>
        <li><a href="#CONTACT">CONTACT</a></li>
               
        {/* <li><Link to ="/Login"></Link></li> */}
        <li><Link to ="/Register">REGISTER</Link></li>
      </ul>
      
    </div>
    
    <div className='row' style={{backgroundColor:"whitesmoke",borderRadius:"5rem",marginTop:"2rem"}}>
      <div className='col-md-6' style={{marginTop:"10rem"}}>
        
        <h5  style={{fontSize:"2rem",color:"#6dabb3"}}><b>BUY BOOKS YOU NEED</b></h5>
        <h5  style={{fontSize:"1rem",color:"#6dabb3"}}><b>DISCOVER NEW WORLDS ONE BOOK AT A TIME</b></h5>
        <h5  style={{fontSize:"1rem",color:"#6dabb3"}}><b>EXPAND YOUR HORIZONS THROUGH THE PAGES OF KONWLEDGE</b></h5>


      </div>
      <div className='col-md-6'>
        <img src='caption.jpg' style={{borderRadius:"4rem",}}  alt=''/>
      </div>
    </div>
     <Prefer/>
   
    <Cards/>
    {/* <Form/> */}
    <Brands/> 
    <Location/>
    
    <Last/>
    </div>
  );
}

export default Navbar;
// import React from 'react';
// import Brands from "./brands";
// import Cards from "./cards";
// import Prefer from "./prefer";
// import Form from "./login";
// import Location from './location';
// import Last from './last';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// function Navbar() {
//   return (
//     <div className='container'>
//       <div className="navbar">
//         <div className="logo">
//           <img src="logo.jpg" alt="Logo" />
//           <h6>BookStore</h6>
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/">HOME</Link></li> {/* Use the correct route for the homepage */}
//           <li><Link to="/Shop">SHOP</Link></li>
//           <li><a href="#SERVICES">EXPLORE OFFERS</a></li>
//           <li><a href="#ABOUT">REVIEWS</a></li>
//           <li><a href="#CONTACT">CONTACT</a></li>
//         </ul>
//       </div>
//       <Prefer/>
    
//         <Cards/>
//        <Form/>
//         <Brands/> 
//         <Location/>
       
//         <Last/> 
//     </div>
//   );
// }

// export default Navbar;
