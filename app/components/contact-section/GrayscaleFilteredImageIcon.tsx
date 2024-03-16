import { ImageIcon } from '../ImageIcon';
import { useGrayscaleIconState } from "./useGrayscaleIconState";

interface GrayscaleFilteredImageIconProps {
  href: string;
  src: string;
  alt: string;
}

export const GrayscaleFilteredImageIcon = ({
  href,
  src,
  alt
}: GrayscaleFilteredImageIconProps) => {
  const {
    filter,
    turnFilterOn,
    turnFilterOff
  } = useGrayscaleIconState();

  return (
    <a
      href={href}
      target="_blank"
      className="px-4"
      style={{ filter }}
      onMouseEnter={turnFilterOff}
      onMouseLeave={turnFilterOn}
    >
      <ImageIcon src={src} alt={alt} />
    </a>
  )
}