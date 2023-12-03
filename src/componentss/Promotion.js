
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Brands = () => {
  return (
    <div style={{backgroundColor:"whitesmoke",borderRadius:"5rem",marginTop:"2rem",width: '90%', height: '100%'}} id='PROMOTIONS'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Promo.jpg"
          alt="First Book"
          style={{ width: '80%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Book Title 1</h3>
          <p>Promotion text for the first book.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="caption.jpg"
          alt="Second Book"
          style={{ width: '80%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Book Title 2</h3>
          <p>Promotion text for the second book.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="promo1.png"
          alt="Third Book"
          style={{ width: '80%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Book Title 3</h3>
          <p>Promotion text for the third book.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Brands;
