import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  width,
  height,
  className = "", 
  containerClassName = "",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  // Auto-optimize Unsplash URLs if present
  let optimizedSrc = src;
  if (src && src.includes('images.unsplash.com') && !src.includes('format=')) {
    optimizedSrc = src.includes('?') 
      ? `${src}&format=webp&q=80` 
      : `${src}?auto=format&fit=crop&format=webp&q=80`;
  }

  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse pointer-events-none" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

