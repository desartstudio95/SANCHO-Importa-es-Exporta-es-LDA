import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import QuotationSimulator from './components/QuotationSimulator';
import ProductDetail from './components/ProductDetail';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';
import BackButton from './components/BackButton';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
          <Navbar />
          <BackButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/cotacao" element={<QuotationSimulator />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <AiChatbot />
          <BackToTop />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
