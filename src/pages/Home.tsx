import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Contact = lazy(() => import('../components/Contact'));

const Home: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Importação e Logística em Moçambique"
        description="A SANCHO é líder em importação e exportação de máquinas pesadas, equipamentos industriais e soluções logísticas em Moçambique. Conheça nossos serviços."
        keywords="importação, exportação, máquinas pesadas, logística Moçambique, equipamentos industriais"
      />
      <Hero />
      <Expertise />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
        <motion.section 
          id="servicos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.section>
        
        <motion.section 
          id="portfolio"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Portfolio />
        </motion.section>
        
        <motion.section 
          id="contacto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>
      </Suspense>
    </motion.main>
  );
};

export default Home;
