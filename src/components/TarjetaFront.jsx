import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const TarjetaFront = () => {
    return (
      <div className="tarjeta-container">
        <motion.div
          className="tarjeta-front"
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p>{' '}Servicios digitales y soluciones</p>
        </motion.div>
      </div>
    );
  };
  
  export default TarjetaFront;





