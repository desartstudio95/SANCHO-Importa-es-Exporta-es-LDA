import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  console.log("LoadingScreen component rendering...");
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex flex-col items-center"
      >
        <img 
          src="https://i.ibb.co/JjkSxWm0/DESART-LOGOTIPO-2.png"
          alt="SANCHO Logo" 
          className="h-32 md:h-48 w-auto object-contain mb-6"
        />
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-2xl md:text-3xl uppercase tracking-tight leading-none text-sancho-primary">
            SANCHO
          </span>
          <span className="text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.2em] text-sancho-accent uppercase mt-2">
            Importações & Exportações LDA
          </span>
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-slate-100 rounded-full mt-8 overflow-hidden">
          <motion.div 
            className="h-full bg-sancho-yellow"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
