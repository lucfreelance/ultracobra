// import React from 'react';
import { Helmet } from 'react-helmet';
import imagenProgramacion from '../img/ruta-programacion.jpg';
import imagenContenidos from '../img/ruta-de-contenidos.jpg';
import '../App.css' 

const Spaces = () => {
  return (
    <>
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
        <title>ultracobra Ⓤ Spaces 🐍</title>
        <meta
          name="description"
          content="Nice to be here at Ultracobra Spaces"
        />
        <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
      </Helmet>
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
      We offer solutions based on web development, generating quality content, or if you need a hand...
    </p>
  </div>
  <div className="service">
    <img
      src={imagenProgramacion}
      alt="Increase your online success with custom programming solutions. Trust us to design components and websites, provide optimization integrations, accessibility, and more."
      title="Increase your online success with custom programming solutions. Trust us to design components and websites, provide optimization integrations, accessibility, and more."
      style={{ width: '250px' }}
    />
    <h3 className="service-title">PROGRAMMING 💻</h3>
    <p className="service-description">
      <a
        href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
        alt="Web component development"
        title="Web component development"
        target="_blank"
        rel="noopener noreferrer"
      >
        Web component development
      </a>
      ,{' '}
      <a
        href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
        alt="Optimization and accessibility integrations"
        title="Optimization and accessibility integrations"
        target="_blank"
        rel="noopener noreferrer"
      >
        Optimization and accessibility integrations
      </a>
      , and more.
    </p>
  </div>
  <div className="service">
    <img
      src={imagenContenidos}
      alt="Create valuable and engaging content for your audience. We offer writing, editing, and content strategy services, optimized for SEO and digital marketing."
      title="Create valuable and engaging content for your audience. We offer writing, editing, and content strategy services, optimized for SEO and digital marketing."
      style={{ width: '250px' }}
    />
    <h3 className="service-title">CONTENT 📝</h3>
    <p className="service-description">
      <a
        href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
        alt="Content writing"
        title="Content writing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Content writing
      </a>
      ,{' '}
      <a
        href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
        alt="Content editing"
        title="Content editing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Content editing
      </a>
      ,{' '}
      <a
        href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
        alt="Content strategy"
        title="Content strategy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Content strategy
      </a>
      , optimized for SEO and digital marketing.
    </p>
  </div>
</section>
        </main>
      </>
    );
  };
  
  export default Spaces;