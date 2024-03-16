"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import React from "react";
import { Preview } from "../../types";

import { HeroParallaxHeader } from './HeroParallaxHeader';
import { HeroParallaxRow } from './HeroParallaxRow';

export interface HeroParallaxProps {
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
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroParallaxHeader />
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
  const firstRow = previews.slice(0, 5);
  const secondRow = previews.slice(5, 10);
  const thirdRow = previews.slice(10, 15);

  return {
    firstRow,
    secondRow,
    thirdRow
  }
}
