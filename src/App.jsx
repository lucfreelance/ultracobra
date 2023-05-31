// import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/Header';
import TarjetaFront from './components/TarjetaFront';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import BotonVolverArriba from './components/BotonVolverArriba';
import Services from './pages/Services';
// import ultraHead from './img/ultra-head-square.png';
// import TarjetaFront from "./components/TarjetaFront";
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
// import { FaReact, FaNodeJs, FaCss3, FaBootstrap } from 'react-icons/fa';


export const App = () => {
  // // Estado del modal
  // const [showModal, setShowModal] = useState(false);

  // // Función para abrir y cerrar el modal
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Código existente que utiliza useEffect
  useEffect(() => {
    // Código de efecto personalizado
    // ...
    // Ejemplo de limpieza al desmontar el componente
    return () => {
      // Código de limpieza
      // ...
    };
  }, []);

  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
<Helmet>
  {/* Google tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7C52MLZWVM');
  `}
  </script>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ultracobra Ⓤ Digital services in Programming and Assistances 🐍</title>
  <meta
    name="description"
    content="Servicios digitales y soluciones en Programación + Contenidos. Estamos en web, foros, social y pronto más!"
  />
  <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
</Helmet>
<Header />
<main>

<section id="intro-promises" className="grid-container">
          <div className="column">
            <h3 className="intro-title">Boost your online mode</h3>
            <p className="intro-description">
              We design digital services to build your project from scratch or boost your online ventures.
            </p>
          </div>
          <div className="column">
            <h3 className="intro-title">Improve your productivity</h3>
            <p className="intro-description">
              We offer solutions based on web development, quality content generation, or, if you need a hand...
            </p>
          </div> 
<div className="service">
        <img
          src={imagenProgramacion}
          alt="Boost your online success with tailored programming solutions. Trust us to design components and websites, offer optimization integrations, accessibility, and more."
          title="Boost your online success with tailored programming solutions. Trust us to design components and websites, offer optimization integrations, accessibility, and more."
          style={{ width: '250px' }}
        />
        <h3 className="service-title">PROGRAMMING 💻</h3>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="Web component development"
            title="Web component development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web component development
          </a>
          <br />
          <span>
            Order scripts, modules, and custom components for your digital venture. Make use of software to strengthen your digital property.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $15
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="Accessibility integrations"
            title="Accessibility integrations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Accessibility Integration
          </a>
          <br />
          <span>
            Web Accessibility focuses on making a website or app accessible to people with different abilities/needs, so your messages can reach more people.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $25
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="CSS animations"
            title="CSS animations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Animations
          </a>
          <br />
          <span>
            Do you want to bring an element of your website to life? Try web CSS animations, we will give a fun touch to your digital space.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $5
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="Blog creation and updates"
            title="Blog creation and updates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog Creation: WordPress - Non-WordPress - No database
          </a>
          <br />
          <span>
            Do you want to create a blog from scratch? We offer options to deliver your message via WordPress, Blogger, another CMS, or even a custom one. Be the medium and the message.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $20
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="Static web design SPA with frameworks"
            title="Static web design SPA with frameworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Static Web Design [SPA] with frameworks
          </a>
          <br />
          <span>
            Create or enhance your online presence with the development of modern, secure, fast, and responsive websites. Take ownership of your project's code.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $50
            </a>
          </span>
        </p>
      </div>
      <div className="service">
        <img
          src={imagenContenidos}
          alt="Power up your online presence with irresistible and captivating content. We take care of creating it for you and making you stand out from the competition."
          title="Power up your online presence with irresistible and captivating content. We take care of creating it for you and making you stand out from the competition."
          style={{ width: '250px' }}
        />
        <h3 className="service-title">CONTENTS 📝</h3>
        <p className="service-description">
          <a
            href="https://forobeta.com/temas/con-excelente-calidad-en-redaccion-y-algo-mas.626791/"
            alt="Thematic Post Pack, writings from 1000 words"
            title="Thematic Post Pack"
            rel="noopener noreferrer"
            target="_blank"
          >
            Writings from 1000 words #PubliPack
          </a>
          <br />
          <span>
            We direct you to the first forum offer as an attractive and high-quality content writer. [Although the link's topic was closed, it will be republished in a relaunched offer]
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $5
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="https://forobeta.com/temas/traductor-espanol-ingles-ingles-portugues-portugues-espanol-a-tu-servicio-24-7-365.660572/"
            alt="ES-EN-ES translations"
            title="ES-EN-ES translations"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spanish / English / Spanish Translations
          </a>
          <br />
          <span>
            We direct you to the second forum offer as an English to Spanish and Spanish to English translator. [Although the link's topic was closed, it will be republished in a relaunched offer]
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $5
            </a>
          </span>
        </p>
        <p className="service-description">
          <a
            href="./pages/Services.jsx"
            alt="Blog creation and updates"
            title="Blog creation and updates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Images generated via MidJourney / StableDiffusion #GeneradoPack
          </a>
          <br />
          <span>
            We put Text-to-Image AIs to work to provide you with images generated by artificial intelligence with efficient prompts and high-quality applications.
          </span>{' '}
          <span className="service-price">
            <a
              href="./pages/Services.jsx"
              className="service-price-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              From $10
            </a>
          </span>
        </p>
      </div>
    </section>

        </main>
        <BotonVolverArriba />
        <Footer />
        <Contacto />
        <Routes>
          <Route path="./components/Header" element={<Header />} />
          <Route path="./components/TarjetaFront" element={<TarjetaFront />} />
          <Route path="./pages/Services" element={<Services />} />
        </Routes> 
      </div>
      {/* Mostrar modal. Va con el codigo useContext useEffect inactivo arriba... 
            <button onClick={toggleModal}>Mostrar Modal</button> */}
    </BrowserRouter>
  );
};

export default App;
