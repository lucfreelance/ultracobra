// import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Services from '../pages/Spaces';
import TarjetaFront from './TarjetaFront';

const RoutesConfig = () => {
  return (
    <BrowserRouter>
    <Router>
      <Route path="/" element={<h2>Home</h2>} />
      <Route path="../pages/Services" element={<Services />} />
      <Route path="./TarjetaFront" element={<TarjetaFront />} />
    </Router>
    </BrowserRouter>
  );
};

export default RoutesConfig;