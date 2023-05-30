import React from 'react';
import '../App.css';

const Servicios = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <p>Aquí puedes agregar información sobre tus servicios.</p>
    </div>
  );
};

export default Servicios;


// import React from 'react';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Servicios = () => {
//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Contenido que se desvanece al aparecer
//       </motion.div>

//       <motion.div
//         initial={{ x: -100 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Contenido que se desliza desde la izquierda
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Contenido que se escala al aparecer
//       </motion.div>
//     </div>
//   );
// };

// export default Servicios;
