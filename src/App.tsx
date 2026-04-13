import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import GoogleAnalytics from './components/GoogleAnalytics';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const QuoteSimulator = lazy(() => import('./pages/QuoteSimulator'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <div className="min-h-screen bg-slate-50 selection:bg-sancho-accent selection:text-white overflow-x-hidden w-full">
        <Navbar />
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white text-sancho-primary font-bold text-xl">Carregando SANCHO...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contactos" element={<Contact />} />
            <Route path="/simular-cotacao" element={<QuoteSimulator />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;
