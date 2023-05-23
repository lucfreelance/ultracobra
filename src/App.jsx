import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import imagenProgramacion from './img/ruta-de-la-imagen-programacion.jpg';
import imagenContenidos from './img/ruta-de-la-imagen-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-la-imagen-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-imagen-artisticos.jpg';
// import Servicios from '/Servicios.jsx';
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
            Servicios digitales vía{' '}
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
            <h3 className="intro-title">Mejora tu productividad</h3>
            <p className="intro-description">
              Ofrecemos una diversa gama de servicios digitales diseñados para construir tu proyecto desde cero o impulsar tus emprendimientos en línea.
            </p>
          </div>
          <div className="column">
            <h3 className="intro-title">Potencializa tu presencia en línea</h3>
            <p className="intro-description">
              Desde desarrollo de aplicaciones hasta generación de contenido atractivo, pasando por asistencia virtual… Cuenta con nuestro respaldo!
            </p>
          </div>

          <div className="service-intro">
            <div className="intro-text"></div>
          </div>

          <div className="service">
            <img src={imagenProgramacion} alt="Programación" style={{ width: '200px' }} />
            <Link to="/Servicios">
              <h3 className="service-title">PROGRAMACIÓN 💻</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Creación de sitios web modernos</li>
              <li className="list-item">Desarrollo de componentes web</li>
              <li className="list-item">Optimización de páginas web</li>
              <li className="list-item">Integraciones de Accesibilidad</li>
            </ul>
            <span className="highlighted-text">
              Desarrollamos programas con herramientas de código y proveedores de primera calidad, para que seas tú el dueño de tu proyecto, y no plataformas de alojamiento gratuito.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Saber más</button>
          </div>

          <div className="service">
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '200px' }} />
            <Link to="/Servicios">
              <h3 className="service-title">CONTENIDOS 📝</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Contenidos para blogs, web y social</li>
              <li className="list-item">Imágenes generadas para ilustración</li>
              <li className="list-item">Sonidos, voces y canciones generadas</li>
              <li className="list-item">Creación y actualización de blogs</li>
            </ul>
            <span className="highlighted-text">
              Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web. Desde un nombre de marca / producto hasta la escritura de una enciclopedia. Podemos con todo.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Saber más</button>
          </div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '200px' }} />
            <Link to="/Servicios">
              <h3 className="service-title">ASISTENCIA 🤝</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Asistencia virtual</li>
              <li className="list-item">Gestión de mensajes</li>
              <li className="list-item">Agendado / Booking</li>
              <li className="list-item">Escritorio remoto</li>
            </ul>
            <span className="highlighted-text">
              Proporcionamos soporte remoto, gestionamos cuentas sociales y de correo electrónico; programamos citas, brindamos atención al cliente y realizamos diversas asistencias virtuales.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Saber más</button>
          </div>

          <div className="service">
            <img src={imagenArtisticos} alt="Artísticos" style={{ width: '200px' }} />
            <Link to="/Servicios">
              <h3 className="service-title">ARTÍSTICOS 🎨</h3>
            </Link>
            <ul className="service-description">
              <li className="list-item">Pintura de murales</li>
              <li className="list-item">Pintura de cuadros</li>
              <li className="list-item">Ilustración / dibujo</li>
              <li className="list-item">Fotografía creativa</li>
            </ul>
            <span className="highlighted-text">
              Como lo digital no lo es todo, damos espacio para la creación visual orgánica en pinturas, ilustraciones, murales, fotografía y otros servicios de consumo pictográfico.
            </span>
            <hr className="service-separator" />
            <button className="cta-button">Saber más</button>
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

          <p>2023 Ⓤ Servicios digitales vía <a href="https://forobeta.com/?ref=179278" target="_blank" alt="ultracobra en Forobeta" title="ultracobra en ForoBeta" rel="noopener noreferrer">ForoBeta</a></p>
          <div className="newsletter-form" style={{ gridColumn: '1 / -1' }}>
            <NewsletterForm /> {/* Agregamos el componente NewsletterForm aquí */}
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
