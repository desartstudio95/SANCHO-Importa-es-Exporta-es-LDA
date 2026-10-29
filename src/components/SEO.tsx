import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface ProductStructuredData {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  category?: string;
  price?: number;
  priceCurrency?: string;
  ratingValue?: number;
  reviewCount?: number;
  inStock?: boolean;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  productData?: ProductStructuredData;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  image = "https://i.ibb.co/0Vm07MQv/favicon-32x32.png",
  productData
}) => {
  const location = useLocation();
  const baseUrl = "https://www.sanchotrading.com";
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | SANCHO – Importação e Logística Moçambique`;
  
  // Base LocalBusiness Schema for SANCHO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "SANCHO – Importações & Exportações LDA",
    "alternateName": "SANCHO Trading Moçambique",
    "url": baseUrl,
    "logo": "https://i.ibb.co/hRZhFPK4/DESART-LOGOTIPO-4.png",
    "image": "https://i.ibb.co/hRZhFPK4/DESART-LOGOTIPO-4.png",
    "description": "Líder em importação, exportação, logística DDP, máquinas pesadas (SANY, SDLG, Shacman, CAT) e equipamentos industriais em Moçambique.",
    "telephone": "+258874228160",
    "email": "info@sanchotrading.com",
    "priceRange": "$$$$",
    "currenciesAccepted": "MZN, USD",
    "paymentAccepted": "Transferência Bancária, Carta de Crédito",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Eduardo Mondlane N°3112 1°Andar, Bairro Alto Maé",
      "addressLocality": "Maputo",
      "addressRegion": "Maputo Cidade",
      "postalCode": "1100",
      "addressCountry": "MZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.9653,
      "longitude": 32.5892
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1Bnadac2uK/",
      "https://www.instagram.com/sanchoimportacoeslda"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Product Schema if on a product page
  const productSchema = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "image": productData.image || image,
    "description": productData.description,
    "sku": productData.sku || productData.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    "category": productData.category || "Máquinas Pesadas e Equipamentos Industriais",
    "brand": {
      "@type": "Brand",
      "name": productData.name.includes("SANY") ? "SANY" : 
              productData.name.includes("SDLG") ? "SDLG" :
              productData.name.includes("Menegotti") ? "Menegotti" :
              productData.name.includes("Toyama") ? "Toyama" :
              productData.name.includes("SHACMAN") ? "SHACMAN" : "SANCHO"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (productData.ratingValue || 4.9).toString(),
      "reviewCount": (productData.reviewCount || 24).toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": productData.priceCurrency || "MZN",
      "price": (productData.price || 4200000).toString(),
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": productData.inStock !== false ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "SANCHO Importações & Exportações LDA"
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={productData ? "product" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SANCHO – Importações & Exportações LDA" />
      <meta property="og:locale" content="pt_MZ" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
