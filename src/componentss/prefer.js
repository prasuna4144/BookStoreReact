
import React from 'react';
import FavBook from '../assets/Banner1.jpg';
import { Link } from 'react-router-dom';

const prefer = () => {
  return (
    <div class="px-4 lg-px-24 my-20 d-flex  md-flex-row justify-content-between align-items-center gap-12">

      <div className='col-md-6'>
        <img src={FavBook} alt="" className='rounded img-fluid' style={{ width: '83%' }} />
      </div>
      <div className='col-md-6 mt-4'>
        <h2 className='text-5xl font-weight-bold my-5' style={{ width: '75%' }}>
          Find Your Favourite <span className='text-primary'>Book Here!</span>
        </h2>
        <p className='mb-2' style={{ width: '83%' }}>
          Books are windows to different worlds, offering readers the opportunity to embark on exciting adventures, gain knowledge, and explore the depths of human imagination. 
          They serve as vessels of wisdom, preserving the collective experiences and insights of generations past.
        </p>
        <div className='d-flex justify-content-between' style={{ width: '75%' }}>
          <div>
            <h3 className='text-3xl font-weight-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-weight-bold'>550+</h3>
            <p className='text-base'>Registered users</p>
          </div>
          <div>
            <h3 className='text-3xl font-weight-bold'>1200+</h3>
            <p className='text-base'>Pdf downloads</p>
          </div>
        </div>
        <Link to="/Register">
      <button className="btn btn-primary font-weight-bold px-5 py-2 rounded">
        Explore Now
      </button>
    </Link>
      </div>
    </div>
  );
}

export default prefer;
