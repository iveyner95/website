import { ImageIcon } from '../ImageIcon';
import { useGrayscaleIconState } from "./useGrayscaleIconState";

export const EmailIcon = () => {
  const {
    filter,
    turnFilterOn,
    turnFilterOff
  } = useGrayscaleIconState();

  return (
    <a href="mailto:igorveyner95@gmail.com" className="px-4" style={{ filter }}>
      <ImageIcon
        src="/mail.png"
        alt="email"
        onMouseEnter={turnFilterOff}
        onMouseLeave={turnFilterOn}
      />
    </a>
  )
}