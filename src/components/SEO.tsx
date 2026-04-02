import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  schema?: any | any[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  keywords,
  schema
}) => {
  const siteName = 'SANCHO – Importações & Exportações LDA';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = 'https://sanchotrading.com';
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
  const defaultDescription = 'A SANCHO é líder em importação e exportação de máquinas pesadas, equipamentos industriais, soluções agrícolas e logística (DDP) em Moçambique.';
  const defaultKeywords = 'importação, exportação, máquinas pesadas, equipamentos industriais, agricultura, logística, Moçambique, Maputo, SANY, SDLG, Toyota, Komatsu, geradores, tratores, desembaraço aduaneiro';
  const defaultOgImage = 'https://i.ibb.co/0Vm07MQv/favicon-32x32.png';

  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_MZ" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
