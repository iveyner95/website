import { ImageIcon } from '../ImageIcon';
import { useGrayscaleIconState } from "./useGrayscaleIconState";

export const LinkedInIcon = () => {
  const {
    filter,
    turnFilterOn,
    turnFilterOff
  } = useGrayscaleIconState();

  return (
    <a href='https://www.linkedin.com/in/igorveyner/' target="_blank" className="px-4" style={{ filter }} >
      <ImageIcon
        src="/linkedin.png"
        alt="LinkedIn"
        onMouseEnter={turnFilterOff}
        onMouseLeave={turnFilterOn}
      />
    </a>
  )
}
