
import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from '../assets/Banner2.jpg';

const Cards = () => {
  return (
    <div className='row' id='SERVICES'style={{backgroundColor:"lightgreen",borderRadius:"5rem",marginTop:"2rem"}}>
    <div className="my-8 mt-16 py-12 bg-light-teal px-4 lg-px-24">
      <div className="row">
        <div className="col-md-6">
        <h2 className="my-8 text-4xl font-weight-bold mb-6 leading-snug" style={{ padding: '10px' }}>
  2023 National Book Awards for Fiction Shortlist
</h2>


          <Link to="/Register">
            <button className="btn btn-primary font-weight-bold px-5 py-2 rounded">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={bookPic} alt="" className="img-fluid w-100" style={{borderRadius:"4rem",}}  />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
