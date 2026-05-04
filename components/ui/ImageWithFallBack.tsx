"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type ImageWithFallbackProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string;
  onError?: ImageProps["onError"];
};

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const {
    src,
    alt,
    className,
    style,
    width,
    height,
    fallbackSrc = ERROR_IMG_SRC,
    onError,
    ...rest
  } = props;

  const [isErrored, setIsErrored] = useState(false);
  const handleError: ImageProps["onError"] = (event) => {
    setIsErrored(true);
    onError?.(event);
  };

  const imageSrc = isErrored ? fallbackSrc : src;
  const useFill = width === undefined && height === undefined;

  const image = (
    <Image
      src={imageSrc}
      alt={alt ?? "Image"}
      className={className}
      style={style}
      onError={handleError}
      fill={useFill}
      width={width}
      height={height}
      unoptimized
      {...rest}
    />
  );

  return useFill ? (
    <div className="relative w-full h-full">{image}</div>
  ) : (
    image
  );
}
