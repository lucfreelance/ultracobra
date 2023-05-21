import React from 'react';
import './App.css';
import imagenProgramacion from './img/ruta-de-la-imagen-programacion.jpg';
import imagenContenidos from './img/ruta-de-la-imagen-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-la-imagen-asistencia.jpg';

export const App = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <header>
        <h1>Ⓤltracobra</h1>
        <p>Proveedor de servicios digitales en Español</p>
      </header>

      <section id="services">
        <h2>Nuestros Servicios</h2>

        <div className="service">          
          <img src={imagenProgramacion} alt="Programación" style={{ width: '200px' }} />
          <h3 className="service-title">PROGRAMACIÓN</h3>
          <ul className="service-description">
            <li className="list-item">Desarrollo de aplicaciones web y móviles</li> 
            <li className="list-item">Creación de sitios web modernos</li> 
            <li className="list-item">Optimización de páginas web</li> 
            <li className="list-item">Migración de sitios</li> 
            <li className="list-item">Integración de accesibilidad</li> 
          </ul>
          <hr className="service-separator" />
        </div>

        <div className="service">
          <img src={imagenContenidos} alt="Contenidos" style={{ width: '200px' }} />
          <h3 className="service-title">CONTENIDOS</h3>
          <ul className="service-description">
            <li className="list-item">Creación de contenido para blogs, social y web</li> 
            <li className="list-item">Imágenes generadas por computador</li> 
            <li className="list-item">Estrategias de marketing de contenidos</li> 
            <li className="list-item">Imágenes generadas por computador</li> 
            <li className="list-item">Estrategias de marketing de contenidos</li> 
          </ul>
          <hr className="service-separator" />
        </div>

        <div className="service">
          <img src={imagenAsistencia} alt="Asistencia Virtual" style={{ width: '200px' }} />
          <h3 className="service-title">ASISTENCIA</h3>
          <ul className="service-description">
            <li className="list-item">Asistente virtual</li> 
            <li className="list-item">Gestión de correos electrónicos</li> 
            <li className="list-item">Programación de citas</li> 
            <li className="list-item">Atención al cliente</li> 
            <li className="list-item">Tareas de asistencia virtual</li> 
          </ul>
          <hr className="service-separator" />
        </div>
      </section>

      <section id="newsletter">
        <h2>¡Suscríbete a nuestro boletín de noticias!</h2>
        <NewsletterForm />
      </section>

      <footer>
        <p>&copy; 2023 ULTRACOBRA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Ingresa tu correo electrónico" />
      <button type="submit">Suscribirse</button>
    </form>
  );
};
