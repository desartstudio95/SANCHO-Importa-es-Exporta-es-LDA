import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '', label = 'Voltar' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 text-slate-500 hover:text-sancho-accent transition-colors font-medium text-sm group ${className}`}
    >
      <div className="p-1.5 bg-slate-100 rounded-full group-hover:bg-sancho-accent/10 transition-colors">
        <ArrowLeft size={16} />
      </div>
      {label}
    </button>
  );
};

export default BackButton;
