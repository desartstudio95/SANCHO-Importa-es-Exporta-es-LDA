import React from 'react';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
// About is now a separate page
import Catalog from './Catalog.tsx';
import Contact from './Contact.tsx';
import SEO from './SEO.tsx';

const Home: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SANCHO – Importações & Exportações LDA",
    "image": "https://i.ibb.co/JjkSxWm0/DESART-LOGOTIPO-2.png",
    "@id": "https://sanchotrading.com",
    "url": "https://sanchotrading.com",
    "telephone": "+258 84 252 0152",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Eduardo Mondlane N°3112 1°Andar, Bairro Alto Maé",
      "addressLocality": "Maputo",
      "addressCountry": "MZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.9667,
      "longitude": 32.5833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/sanchotrading",
      "https://www.instagram.com/sanchotrading"
    ]
  };

  return (
    <main className="flex-grow">
      <SEO 
        title="Importação e Exportação de Máquinas Pesadas em Moçambique" 
        description="A SANCHO é sua parceira líder em Moçambique para importação de máquinas pesadas, equipamentos industriais e logística DDP. Soluções completas da origem ao destino."
        canonical="/"
        schema={localBusinessSchema}
      />
      <Hero />
      <Services />
      {/* About Section removed from Home flow */}
      <Catalog />
      <Contact />
    </main>
  );
};

export default Home;
