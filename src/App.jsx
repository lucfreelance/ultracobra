import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Header from './components/Header';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
// import Pitch	from './components/Pitch';
import TarjetaFront from './components/TarjetaFront';
// import BotonVolverArriba from './components/BotonVolverArriba';
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
        {/* <Pitch /> */}
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

