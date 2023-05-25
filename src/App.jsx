import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-artistica.jpg';
// import Contacto from './components/Contacto'
import '@fortawesome/fontawesome-free/css/all.css';

// const NewsletterForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get('email');
//     const mailtoLink = `mailto:ultracobre@gmail.com?subject=Suscripción a Newsletter&body=Correo electrónico: ${email}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Ingresa tu email" />
//       <button type="submit">Suscríbete al Boletín</button>
//     </form>
//   );
// };

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
        <header>
          <h1>
            <span className="highlight">Ⓤ</span> ultracobra{' '}
            <span className="emoji">🐍</span>
          </h1>
          <p className="slogan-prompt">
            Servicios digitales y soluciones vía{' '}
            <a
              href="https://forobeta.com/?ref=179278"
              alt="ultracobra en ForoBeta"
              title="ultracobra en ForoBeta"
              // rel="noopener noreferrer"
              // target="_blank"
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
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '250px' }} />
            <h3 className="service-title">CONTENIDOS 📝</h3>
            <p className="service-description">
              <a
                href="/"
                alt="Post Pack temático"
                title="Post Pack temático"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Post Pack redacciones desde 1000 palabras
              </a>
              <br />
              <span className="description-subtext">
                Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Traducciones ES-EN-ES"
                title="Traducciones ES-EN-ES"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Traducciones ES-EN-ES
              </a>
              <br />
              <span className="description-subtext">
                Traducciones ES-EN-ES Traducciones ES-EN-ES Traducciones ES-EN-ES Traducciones ES-EN-ES Traducciones ES-EN-ES.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Creación y actualización de blogs"
                title="Creación y actualización de blogs"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Creación y actualización de blogs
              </a>
              <br />
              <span className="description-subtext">
                Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web.
              </span>
            </p>
          </div>

          <div className="service">
            <img src={imagenProgramacion} alt="Programación" style={{ width: '250px' }} />
            <h3 className="service-title">PROGRAMACIÓN 💻</h3>
            <p className="service-description">
              <a
                href="/"
                alt="Diseño web en marco de desarrollo"
                title="Diseño web en marco de desarrollo"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Diseño web en marcos de desarrollo
              </a>
              <br />
              <span className="description-subtext">
                Desarrollo de web app, módulos, componentes y otras soluciones de software.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Optimización de páginas web"
                title="Optimización de páginas web"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Optimización de páginas web
              </a>
              <br />
              <span className="description-subtext">
                Favorece la velocidad de tu proyecto para evitar rebotes.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Integraciones de Accesibilidad"
                title="Integraciones de Accesibilidad"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Integraciones de Accesibilidad
              </a>
              <br />
              <span className="description-subtext">
                Que tu web / app llegue a la mayor cantidad de personas posible con Accesibilidad.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Desarrollo de componentes web"
                title="Desarrollo de componentes web"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Desarrollo de componentes web
              </a>
              <br />
              <span className="description-subtext">
                Desarrollo de web app, módulos, componentes y otras soluciones de software.
              </span>
            </p>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '250px' }} />
            <h3 className="service-title">ASISTENCIA 🤝</h3>
            <p className="service-description">
              <a
                href="/"
                alt="Asistencia virtual"
                title="Asistencia virtual"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Asistencia virtual
              </a>
              <br />
              <span className="description-subtext">
                Proporcionamos soporte remoto, gestionamos cuentas sociales y de email; programamos citas, brindamos help desk al cliente y realizamos diversas asistencias virtuales y acciones sociales a tu favor.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Respondedor Email"
                title="Respondedor Email"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Respondedor Email
              </a>
              <br />
              <span className="description-subtext">
                Proporcionamos soporte remoto, gestionamos cuentas sociales y de email; programamos citas, brindamos help desk al cliente y realizamos diversas asistencias virtuales y acciones sociales a tu favor.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Agendado"
                title="Agendado"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Agendado
              </a>
              <br />
              <span className="description-subtext">
                Proporcionamos soporte remoto, gestionamos cuentas sociales y de email; programamos citas, brindamos help desk al cliente y realizamos diversas asistencias virtuales y acciones sociales a tu favor.
              </span>
            </p>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenArtisticos} alt="Artística" style={{ width: '250px' }} />
            <h3 className="service-title">ARTÍSTICOS 🎨</h3>
            <p className="service-description">
              <a
                href="/"
                alt="Cuadros artísticos serie 1: 40 cms x 44 cms"
                title="Cuadros artísticos serie 1: 40 cms x 44 cms"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Cuadros artísticos serie 1
              </a>
              <br />
              <span className="description-subtext">
                Cuadros artísticos serie 1 (40 cms x 44 cms) Acrílico sobre lienzo enmarcado - ARTISTAS VARIOS.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Cuadros artísticos serie 2: 40 cms x 60 cms"
                title="Cuadros artísticos serie 2: 40 cms x 60 cms"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Cuadros artísticos serie 2
              </a>
              <br />
              <span className="description-subtext">
                Cuadros artísticos serie 2 (40 cms x 60 cms) Acrílico sobre lienzo enmarcado - ARTISTAS VARIOS.
              </span>
            </p>
            <hr className="service-separator" />
            <button className="cta-button">Galería</button>
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
              <i className="far fa-envelope"></i> <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email ultracobra" title="Email ultracobra">ultracobre@gmail.com</a>
            </li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
};

