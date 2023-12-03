import React from 'react';
import './App.css';
import Navbar from './componentss/navbar';
import Shop from './componentss/shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoplist from './componentss/shopdata';
import Login from './componentss/login';
import Reg from './componentss/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoplist" element={<Shoplist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Reg/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
