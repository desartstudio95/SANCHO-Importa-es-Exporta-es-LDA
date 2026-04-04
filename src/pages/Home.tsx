import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';

const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
        <section id="servicos">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="depoimentos">
          <Testimonials />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
};

export default Home;
