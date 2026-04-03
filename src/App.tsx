import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load sections for better performance
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-sancho-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
          <section id="servicos">
            <Services />
          </section>
          
          <section id="portfolio">
            <Portfolio />
          </section>
          
          <section id="sobre">
            <About />
          </section>
          
          <section id="depoimentos">
            <Testimonials />
          </section>
          
          <section id="contacto">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
