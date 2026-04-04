import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const QuoteSimulator = lazy(() => import('./pages/QuoteSimulator'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-sancho-accent selection:text-white">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white text-sancho-primary font-bold text-xl">Carregando SANCHO...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contactos" element={<Contact />} />
          <Route path="/simular-cotacao" element={<QuoteSimulator />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
