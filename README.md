    # Ⓤ ultracobra

# How to run / start / launch / deploy

npm run dev

## Descripción del proyecto

ultracobra es una página de servicios digitales que ofrece soluciones y servicios en el ámbito digital. El objetivo principal de este proyecto es proporcionar a los clientes una variedad de servicios de alta calidad, desde desarrollo de aplicaciones web y móviles hasta generación de contenido y asistencia virtual.

## Características destacadas

Programación: Desarrollamos aplicaciones web y móviles, creamos sitios web modernos, optimizamos páginas web y ofrecemos servicios de migración e integración de accesibilidad.

### Contenidos: Generamos contenido atractivo y de calidad para blogs, redes sociales y sitios web. Además, nos encargamos de la redacción y edición de textos, y creamos estrategias de marketing de contenidos.

### Asistencia: Proporcionamos soporte administrativo remoto, gestionamos correos electrónicos, programamos citas, brindamos atención al cliente y realizamos diversas tareas de asistencia virtual.

## Funcionalidades

Página de inicio atractiva y profesional que muestra una descripción general de los servicios ofrecidos.

Sección de servicios detallados que proporciona información específica sobre cada servicio, incluyendo una breve descripción y una lista de características.

Formulario de suscripción al boletín de noticias para que los usuarios interesados puedan recibir actualizaciones y novedades.

Información de contacto y enlaces a perfiles de redes sociales para facilitar la comunicación con los clientes.

## Tecnologías utilizadas

### HTML5 y CSS3 para la estructura y diseño de la página.

### React.js para la creación de componentes y la gestión dinámica de la interfaz.

### JavaScript para la implementación de funcionalidades interactivas y lógica del formulario.

## Instalación

1. Clona el repositorio de Ⓤ ultracobra en tu máquina local.

2. Asegúrate de tener Node.js instalado.

3. Abre una terminal y navega hasta la carpeta raíz del proyecto.

4. Ejecuta el comando npm install para instalar las dependencias del proyecto.

5. Una vez que se completen las instalaciones, ejecuta el comando npm start para iniciar la aplicación en tu navegador.

## Contribución

Si deseas contribuir al proyecto Ⓤ ultracobra, sigue los siguientes pasos:

Crea un fork del repositorio.

Realiza los cambios o mejoras en tu fork.

Envía un pull request para que revisemos tus cambios y los incorporemos al proyecto principal.

Agradecemos cualquier contribución y estaremos encantados de revisar y colaborar contigo.

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto Ⓤ ultracobra, no dudes en ponerte en contacto con nosotros:

Twitter: @cobraultra
Correo electrónico: ultracobre@gmail.com
WhatsApp: +57 3166054533

¡Estamos emocionados de trabajar contigo y ofrecerte los mejores servicios digitales! 😊

# Trouble Chapter

- I'm facing problems implementing the routing strategy for this website. I don't know if this is about ECMA\* thing the reason why, every project I saw / see have different routing strategy and, something works but for me, still loojing...

- useState / useEffect and some other hooks I still increase abstract leveling to in the core of this sofisticated practice. I'll looking over codes and tutorials to at last habg on on this!

# Ⓤ ultracobra

Página de SERVICIOS DIGITALES de @ultracobra

Checa mis ofertas en forobeta.com/ultracobra

https://forobeta.com/members/ultracobra.179278/

u u l ttttttttt rrrrr aaaaa  
u u l tt r r a a
u u l tt r r aaaaaa
u u l tt rrrrr a a
u u l tt r r a a
uuu llll tt r r a a
ccccc oooooo bbbbbb rrrrr aaaaa
c o o b b r r a a
c o o b b r r aaaaaa
c o o bbbbbbb rrrrr a a
c o o b b r r a a
ccccc oooooo bbbbbb r r a a

#

User
The thing is I already have a linkable buttonthat change url but didn't change dom as expected, or, even if I buy like is working now, I need a function that jump to deployed content bellow Home content, take a look

\*src/App.jsx

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Header from './components/Header';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import TarjetaFront from './components/TarjetaFront';
import Blog1 from '../Blog/Blog-1'
import Blog2 from '../Blog/Blog-2'

export const App = () => {
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

<div style={{ marginLeft: '0px' }}>
<Helmet>
{/_ Google tag (gtag.js) _/}

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
  <title>Digital love, life and joy in just one place with ultracobra Ⓤ 🐍</title>
  <meta
    name="description"
    content="Ultracobra website on Netlify"
  />
  <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
</Helmet>
<Header />
<main>
<Blog2 /> <br /> <br /> <Blog1 />
</main>
        <Footer />
        <Contacto />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/tarjetaFront" element={<TarjetaFront />} />
    </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

\*src/components/TarjetaFront.jsx (this button on click is another way that I just can check)
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const TarjetaFront = () => {
const navigate = useNavigate();

const handleButtonClick = () => {
navigate('/spaces');
};

return (

<div className="tarjeta-container">
<motion.div
className="tarjeta-front"
initial={{ opacity: 0, y: -90 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.5 }} >
<button onClick={handleButtonClick}>Go to Spaces</button>
</motion.div>
</div>
);
};

export default TarjetaFront;

\*src/components/Routes.jsx (Here is another router rather than App.jsx located)
// import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Spaces from '../pages/Spaces';
import TarjetaFront from './TarjetaFront';

const RoutesConfig = () => {
return (
<BrowserRouter>
<Router>
<Route path="/" element={<h2>Home</h2>} />
<Route path="../pages/Services" element={<Spaces />} />
<Route path="./TarjetaFront" element={<TarjetaFront />} />
</Router>
</BrowserRouter>
);
};

export default RoutesConfig;

\*src/components/Header.jsx

import UltraHead from '../img/ultra-head-square.png';
import { Link } from 'react-router-dom';
import TarjetaFront from "./TarjetaFront";
import '../App.css';

const Header = () => {
return (

<header>
<h1>
<Link to="/"><span className="ultra">Ⓤ</span> ultracobra{' '}
<span className="emoji">🐍</span></Link>
</h1>  
 <TarjetaFront />
<div>
<img
              src={UltraHead}
              alt="Relax and contact ultracobra services"
              className="ultra-head"
            />
<hr className="divisory-line" />
</div>
</header>
);
};

export default Header;

remember I need become usable buttons here and another spaces

# Nicer Commands

- sfc to create a component
- rfce to create a component autonamed
