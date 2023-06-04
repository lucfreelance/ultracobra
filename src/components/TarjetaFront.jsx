// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Spaces from '../pages/Spaces'
import '../App.css';


const TarjetaFront = () => {
  return (
    <div className="tarjeta-container">
      <motion.div
        className="tarjeta-front"
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="../pages/Spaces" title="Ultracobra Spaces">
          <p>Spaces and time to get fun!</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default TarjetaFront;