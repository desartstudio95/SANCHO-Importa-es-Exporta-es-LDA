import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import ProductsPage from './components/ProductsPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import QuotationSimulator from './components/QuotationSimulator.tsx';
import ProductDetail from './components/ProductDetail.tsx';
import FAQPage from './components/FAQPage.tsx';
import Footer from './components/Footer.tsx';
import AiChatbot from './components/AiChatbot.tsx';
import BackToTop from './components/BackToTop.tsx';
import CookieConsent from './components/CookieConsent.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import BackButton from './components/BackButton.tsx';

const App: React.FC = () => {
  console.log("App component mounting...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("App useEffect running...");
    // Simulate initial loading
    const timer = setTimeout(() => {
      console.log("Loading finished, setting isLoading to false");
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    console.log("Rendering LoadingScreen...");
    return <LoadingScreen />;
  }

  console.log("Rendering main app routes...");
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
