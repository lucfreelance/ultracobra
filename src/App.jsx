import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-artistica.png';
import '@fortawesome/fontawesome-free/css/all.css';

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

          {/* <div className="service-intro">
            <div className="intro-text"></div>
          </div> */}

          <div className="service">
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '250px' }} />
            <h3 className="service-title">CONTENIDOS 📝</h3>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/con-excelente-calidad-en-redaccion-y-algo-mas.626791/"
                alt="Post Pack temático redacciones desde 1000 palabras"
                title="Post Pack temático"
                rel="noopener noreferrer"
                target="_blank"
              >
                Redacciones desde 1000 palabras #PostPack
              </a>
              <br />
              <span className="description-subtext">
                Relanzamos la primera oferta del foro como redactor de contenido atractivo y de calidad para blogs, redes sociales y sitios web.
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
                Traducciones Español / Inglés / Español
              </a>
              <br />
              <span className="description-subtext">
                Evite la imprecisión de las traducciones automáticas, ofreciendo un resultado de traducción mucho más acertado.
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
                Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web. Construimos tu blog desde cero para WordPress, otros CMS, blogs sin base de datos.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
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
                Diseño web con o sin frameworks
              </a>
              <br />
              <span className="description-subtext">
              Crea una presencia en línea impactante con el desarrollo de sitios web desarrollados con marcos de desarrollo [frameworks], tipo vainilla o con CMS.
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
                Optimización de webs y apps
              </a>
              <br />
              <span className="description-subtext">
              Impulsa el rendimiento de tu proyecto al mejorar la velocidad de carga, experiencia del usuario, y evitarás rebotes por cargas iniciales lentas.
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
                Integraciones de Accesibilidad Web
              </a>
              <br />
              <span className="description-subtext">
              La Accesibilidad Web se enfoca en hacer que un sitio web o app sea fácilmente usable por personas con diferentes capacidades y necesidades, asñi tu mensaje llegará a más personas.
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
                Desarrollo de componentes web, módulos y otras soluciones personalizadas de software integradas a tus propiedades digitales.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
          </div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '250px' }} />
            <h3 className="service-title">ASISTENCIA 🤝</h3>
            <p className="prompt-text">Obtén soporte eficiente en tus tareas administrativas y organizativas. Simplificamos tu carga de trabajo para que puedas concentrarte en lo más importante.</p>
            
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
              Olvídate de la carga de responder correos electrónicos uno por uno. Nuestro servicio de respondedor de email se encargará de contestar tus mensajes de manera profesional.
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
                Agendador
              </a>
              <br />
              <span className="description-subtext">
              Simplifica organizando tus citas y reuniones. Nuestro agendador te ayudará a gestionar correctamente tu agenda, citas y recordatorios para que nunca pierdas un evento importante.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
          </div>

          <div className="service">
            <img src={imagenArtisticos} alt="Artístico" style={{ width: '250px' }} />
            <h3 className="service-title">ARTÍSTICO 🎨</h3>
            <p className="prompt-text">Como no todo puede ser digital, lanzamos ocasionalmente algunas piezas de arte físico. Puedes echar un vistazo, cuéntanos qué te gusta.</p>
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
            <hr className="service-separator" />
            <button className="cta-button">Galería</button>
          </div>
        </section>

        <footer className="grid-container">
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