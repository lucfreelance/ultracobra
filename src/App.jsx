import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Spaces from './pages/spaces/Spaces';
import Pitch from './components/Pitch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog3 from '././pages/spaces/blog3/Blog-3.jsx';
import Blog2 from '././pages/spaces/Blog-2.jsx';
import Blog1 from './pages/spaces/Blog-1.jsx';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <meta name="description" content="Ultracobra website on Netlify" />
          <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
        </Helmet>
        <Header />
        <main>
          <Routes>
            <Route path="/Pitch" element={<Pitch />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/blog3" element={<Blog3 />} />
            <Route path="/spaces/blog2" element={<Blog2 />} />
            <Route path="/spaces/blog1" element={<Blog1 />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
