import './shop.css';
import axios from 'axios';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {
 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [ cartItems,setCartItems] = useState([]);

  const data = [
 
    { imageurl: 'Book1.jpg',
     name: 'End of all Things', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book17.jpg',
     name: 'Web Design', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book18.jpg',
     name: 'DBMS', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book3.jpg',
     name: 'All Our Names', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book4.jpg',
     name: 'Germs', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book5.jpg',
     name: 'The African Book of Names', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book6.jpg',
     name: 'Seven Deaths', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book7.jpg',
     name: 'Baby Names', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book8.jpg',
     name: 'Oxford', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book9.jpg',
     name: 'Bible', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book10.jpg',
     name: 'Banking', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book11.jpg',
     name: 'Names of Jesus', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book12.jpg',
     name: 'Augustin', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book13.jpg',
     name: 'Engineering', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book14.jpg',
     name: 'Mathematics', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book15.jpg',
     name: 'Engg Maths', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: 'Book16.jpg',
     name: 'Operating Systems', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
  ];
 
  
 

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleButtonClick = (itemName) => {
    const selectedItem = filteredData.find((item) => item.name === itemName)
    // You can add custom logic here when a button is clicked
    console.log(`Button clicked for ${itemName}`);
   
    // Add the selected item to the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, selectedItem]);
    axios.post('http://localhost:4500/addToCart', selectedItem)
    .then(response => {
      console.log('Success:', response.data);
      alert("Added to Cart Successfully")
      // You can handle success response from the server
    })
    .catch(error => {
      console.error('Error:', error);
      // You can handle errors here
    });
  };

  return (
    
      
  
    <div className='container' style={{ border: '0px' }} id='SHOP' >
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <Link to="/shoplist"><i class="fa-solid fa-cart-plus fa-2x" style={{color: "black",marginLeft:"2rem"}}></i></Link>

      <div className='row'>
        {filteredData.map((item, index) => (
          <div key={index} className='col-md-2'>
            <img src={item.imageurl} alt='' style={{ height: '300px', width: '200px' }} />
            <p>{item.name}</p>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>

            <h6 style={{ color: 'green' }}>{item.discount} off</h6>
            <p>
              <del>{item.originalPrice}</del> {item.discountedPrice}
            </p>
             <h4 onClick={() => handleButtonClick(item.name)} style={{color:"red",cursor:"pointer"}}>Add to Cart<i class="fa-solid fa-cart-plus" style={{color: "red",cursor:"pointer"}}></i></h4>
          </div>
        ))} 
      </div>
    </div>
    
  );
}

export default Card;


