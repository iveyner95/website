import Image from "next/image";

interface ImageIconProps {
  src: string;
  alt: string;
}

export const ImageIcon = ({
  src,
  alt,
}: ImageIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
    />
  )
}