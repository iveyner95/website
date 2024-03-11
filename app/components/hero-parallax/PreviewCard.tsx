
import {
  MotionValue,
  motion
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Preview } from "../../types";

export const PreviewCard = ({
  preview,
  translate,
}: {
  preview: Preview
  translate: MotionValue<number>;
}) => {
  const { filter, turnFilterOn, turnFilterOff } = useHoverState();

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

const useHoverState = () => {
  const FILTER_ON = 'blur(3px)'
  const FILTER_OFF = 'blur(0px)'

  const [filter, setFilter] = useState(FILTER_ON)

  const turnFilterOn = () => {
    setFilter(FILTER_ON)
  }

  const turnFilterOff = () => {
    setFilter(FILTER_OFF)
  }

  return {
    filter,
    turnFilterOn,
    turnFilterOff
  }
}