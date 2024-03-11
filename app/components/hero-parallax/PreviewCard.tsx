
import { useHoverFilterState } from '@/app/hooks/useHoverFilterState';
import {
  MotionValue,
  motion
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Preview } from "../../types";

interface PreviewCardProps {
  preview: Preview
  translate: MotionValue<number>;
}

export const PreviewCard = ({
  preview,
  translate,
}: PreviewCardProps) => {
  const { filter, turnFilterOn, turnFilterOff } = useBrightnessHoverState();

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={preview.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={preview.link}
        className="block group-hover/product:shadow-2xl "
        target="_blank"
      >
        <Image
          src={preview.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={preview.title}
          style={{ filter }}
          onMouseEnter={turnFilterOff}
          onMouseLeave={turnFilterOn}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {preview.title}
      </h2>
    </motion.div>
  );
};

const useBrightnessHoverState = () => {
  const FILTER_ON = 'brightness(0.75)'
  const FILTER_OFF = 'brightness(1)'

  const { filter, turnFilterOn, turnFilterOff } = useHoverFilterState(FILTER_ON, FILTER_ON, FILTER_OFF)

  return {
    filter,
    turnFilterOn,
    turnFilterOff
  }
}