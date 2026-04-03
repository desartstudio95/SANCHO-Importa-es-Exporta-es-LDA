import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 text-sancho-primary hover:text-sancho-accent font-bold transition-colors ${className}`}
    >
      <ArrowLeft size={20} />
      Voltar
    </button>
  );
};

export default BackButton;
