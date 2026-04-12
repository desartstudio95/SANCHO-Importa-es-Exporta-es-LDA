import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Contact = lazy(() => import('../components/Contact'));

const Home: React.FC = () => {
  return (
    <main>
      <SEO 
        title="Importação e Logística em Moçambique"
        description="A SANCHO é líder em importação e exportação de máquinas pesadas, equipamentos industriais e soluções logísticas em Moçambique. Conheça nossos serviços."
        keywords="importação, exportação, máquinas pesadas, logística Moçambique, equipamentos industriais"
      />
      <Hero />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
        <section id="servicos">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
};

export default Home;
