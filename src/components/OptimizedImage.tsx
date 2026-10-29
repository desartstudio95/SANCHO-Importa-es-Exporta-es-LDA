import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component with explicit width/height to avoid CLS,
 * auto webp/format parameters for CDN/Unsplash URLs, native lazy loading,
 * async decoding, and smooth skeleton placeholder.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  priority = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Auto-optimize Unsplash images to format=webp and appropriate quality/sizing if present
  let optimizedSrc = src;
  if (src && src.includes('images.unsplash.com')) {
    if (!src.includes('format=')) {
      optimizedSrc = src.includes('?') 
        ? `${src}&format=webp&q=80` 
        : `${src}?auto=format&fit=crop&format=webp&q=80`;
    }
  }

  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse pointer-events-none" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
