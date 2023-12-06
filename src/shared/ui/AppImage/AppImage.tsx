import {
  ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = ({
  className,
  src,
  alt = '',
  width,
  height,
  fallback,
  errorFallback,
  ...props
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      className={className}
      width={width}
      height={height}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
