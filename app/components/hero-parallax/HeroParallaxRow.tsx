
import { Preview } from "@/app/types";
import {
  MotionValue,
  motion,
} from "framer-motion";
import { PreviewCard } from './PreviewCard';

interface HeroParallaxRowProps {
  previews: Preview[];
  className: string;
  translate: MotionValue<any>
}

export const HeroParallaxRow = ({ previews, className, translate }: HeroParallaxRowProps) => {
  return (
    <motion.div className={className}>
      {previews.map((preview) => (
        <PreviewCard
          preview={preview}
          translate={translate}
          key={preview.title}
        />
      ))}
    </motion.div>
  )
}