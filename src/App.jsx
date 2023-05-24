import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-artistica.jpg';
// import Servicios from './components/Servicios';
// import Contacto from './components/Contacto'
import '@fortawesome/fontawesome-free/css/all.css';

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const mailtoLink = `mailto:ultracobre@gmail.com?subject=Suscripción a Newsletter&body=Correo electrónico: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Ingresa tu email" />
      <button type="submit">Suscríbete al Boletín</button>
    </form>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
        <header>
          <h1>Ⓤ ultracobra 🐍</h1>
          <p className="slogan-prompt">
            Servicios digitales y soluciones vía{' '}
            <a
              href="https://forobeta.com/?ref=179278"
              alt="ultracobra en ForoBeta"
              title="ultracobra en ForoBeta"
              rel="noopener noreferrer"
              target="_blank"
            >
              ForoBeta
            </a>
          </p>
        </header>

        <section id="services" className="grid-container">
          <div className="column">
            <h3 className="intro-title">Potencia tu modo online</h3>
            <p className="intro-description">
              Diseñamos servicios digitales para construir tu proyecto desde cero o impulsar tus emprendimientos en línea.
            </p>
          </div>
          <div className="column">
            <h3 className="intro-title">Mejora tu productividad</h3>
            <p className="intro-description">
            Ofrecemos soluciones basadas en desarrollo web, generación de contenido de calidad, o, si necesitas una mano…
            </p>
          </div>

          <div className="service-intro">
            <div className="intro-text"></div>
          </div>

          <div className="service">
            <img src={imagenProgramacion} alt="Programación" style={{ width: '250px' }} />
            <Link to="./components/Servicios">
              <h3 className="service-title">PROGRAMACIÓN 💻</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Creación de sitios web modernos</li>
              <li className="list-item">Desarrollo de componentes web</li>
              <li className="list-item">Optimización de páginas web</li>
              <li className="list-item">Integraciones de Accesibilidad</li>
            </ul>
            <span>
              Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
              <br />
              <br />
              <span>Con herramientas y proveedores de primera, para mejor rendimiento, seguridad y accesibilidad.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '250px' }} />
            <Link to="./components/Servicios">
              <h3 className="service-title">CONTENIDOS 📝</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Contenidos para blogs, web y social</li>
              <li className="list-item">Imágenes generadas para ilustración</li>
              <li className="list-item">Sonidos, voces y canciones generadas</li>
              <li className="list-item">Creación y actualización de blogs</li>
            </ul>
            <span>
              Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web. </span>
              <br />
              <br />
              <span>Desde un nombre de marca / producto hasta la escritura de una enciclopedia. Podemos con todo.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '250px' }} />
            <Link to="./components/Servicios">
              <h3 className="service-title">ASISTENCIA 🤝</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Asistencia virtual</li>
              <li className="list-item">Gestión de mensajes</li>
              <li className="list-item">Agendado / Booking</li>
              <li className="list-item">Escritorio remoto</li>
            </ul>
            <span>
              Proporcionamos soporte remoto, gestionamos cuentas sociales y de email; programamos citas, brindamos help desk al cliente y realizamos diversas asistencias virtuales y acciones sociales a tu favor.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenArtisticos} alt="Artística" style={{ width: '250px' }} />
            <Link to="./components/Servicios">
              <h3 className="service-title">ARTÍSTICA 🎨</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Pintura de cuadros</li>
              <li className="list-item">Pintura de murales</li>
              <li className="list-item">Ilustración / dibujo</li>
              <li className="list-item">Fotografía creativa</li>
            </ul>
            <span>
              Como lo digital no lo es todo, ofreceremos ocasionalmente piezas de arte echas a  mano, desde cuadros hasta murales, pasando por fotografías...
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Productos</button>
          </div>
        </section>

        <footer className="grid-container footer">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <i className="fab fa-whatsapp"></i> <a href="https://wa.me/573166054533" target="_blank" rel="noopener noreferrer" alt="WhatsApp ultracobra" title="WhatsApp @ultracobra">WhatsApp</a>
            </li>

            <li>
              <i className="fab fa-twitter"></i> <a href="https://twitter.com/cobraultra" target="_blank" rel="noopener noreferrer" alt="Twitter ultracobra" title="Twitter @ultracobra">@cobraultra</a>
            </li>
            <li>
              <i className="fab fa-instagram"></i> <a href="https://instagram.com/ultracobra.es/" target="_blank" rel="noopener noreferrer" alt="Instagram ultracobra" title="Instagram @ultracobra">@ultracobra.es</a>
            </li>
            <li>
              <i className="far fa-envelope"></i> <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email ultracobra" title="Email @ultracobra">ultracobre@gmail</a>
            </li>
          </ul>

          <p>2023 Ⓤ Servicios digitales y soluciones vía <a href="https://forobeta.com/?ref=179278" target="_blank" alt="ultracobra en Forobeta" title="ultracobra en ForoBeta" rel="noopener noreferrer">ForoBeta</a></p>
          <div className="newsletter-form" style={{ gridColumn: '1 / -1' }}>
            <NewsletterForm /> {/* Agregamos el componente NewsletterForm aquí */}
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
