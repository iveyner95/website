import Image from "next/image";
import React from "react";

interface ImageIconProps {
  src: string;
  alt: string;
  onMouseEnter: React.MouseEventHandler<HTMLImageElement>
  onMouseLeave: React.MouseEventHandler<HTMLImageElement>
}

export const ImageIcon = ({
  src,
  alt,
  onMouseEnter,
  onMouseLeave,
}: ImageIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} />
  )
}