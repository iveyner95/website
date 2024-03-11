"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Preview } from "../../types";

interface HeroParallaxProps {
  previews: Preview[];
}

export const HeroParallax = ({
  previews,
}: HeroParallaxProps) => {
  const { firstRow, secondRow, thirdRow } = useProcessedPreviews(previews)
  const { ref, rotateX, translateX, translateXReverse, translateY, rotateZ, opacity } = useMotionControls();

  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <HeroParallaxRow previews={firstRow} translate={translateX} className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" />
        <HeroParallaxRow previews={secondRow} translate={translateXReverse} className="flex flex-row  mb-20 space-x-20" />
        <HeroParallaxRow previews={thirdRow} translate={translateX} className="flex flex-row-reverse space-x-reverse space-x-20" />
      </motion.div>
    </div>
  );
};

interface HeroParallaxRowProps extends HeroParallaxProps {
  className: string;
  translate: MotionValue<any>
}

const HeroParallaxRow = ({ previews, className, translate }: HeroParallaxRowProps) => {
  return (
    <motion.div className={className}>
      {previews.map((preview) => (
        <ProductCard
          preview={preview}
          translate={translate}
          key={preview.title}
        />
      ))}
    </motion.div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Igor Veyner
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Fullstack Software Engineer
        <br />
        Frontend | Backend | Testing | Observability | CI CD
      </p>
    </div>
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


const useMotionControls = () => {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return {
    ref,
    rotateX,
    translateX,
    translateXReverse,
    translateY,
    rotateZ,
    opacity
  }
}

const useProcessedPreviews = (previews: Preview[]) => {
  // TODO: randomize previews with lodash shuffle
  const firstRow = previews.slice(0, 5);
  const secondRow = previews.slice(5, 10);
  const thirdRow = previews.slice(10, 15);

  return {
    firstRow,
    secondRow,
    thirdRow
  }
}

export const ProductCard = ({
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
