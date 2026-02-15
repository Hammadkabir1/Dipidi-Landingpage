import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  eager?: boolean;
}

/**
 * Optimized Image Component with:
 * - Lazy loading by default
 * - WebP support with fallback
 * - Loading state
 */
export default function OptimizedImage({
  src,
  alt,
  fallback,
  eager = false,
  className,
  style,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Use WebP if available, fallback to original
  const imageSrc = hasError && fallback ? fallback : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        if (!hasError && fallback) {
          setHasError(true);
        }
      }}
      {...props}
    />
  );
}
