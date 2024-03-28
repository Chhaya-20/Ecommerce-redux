
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './styles.css'; 
import Cart from './pages/Cart';

import Home from './pages/Home';
function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
         
        </Routes>
     
    </Router>
  );
}

export default App;
