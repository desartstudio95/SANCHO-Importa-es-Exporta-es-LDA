import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show if not on home page
  const isHomePage = location.pathname === '/';

  return (
    <AnimatePresence mode="wait">
      {!isHomePage && (
        <motion.button
          key="back-button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={() => navigate(-1)}
          className="fixed top-24 left-4 md:left-8 z-[60] flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-xl text-sancho-primary font-bold hover:bg-sancho-yellow hover:border-sancho-yellow transition-all group active:scale-95"
          title="Voltar para a página anterior"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline">Voltar</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackButton;
