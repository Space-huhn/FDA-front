"use client"
import React, {useId} from "react";
import {motion} from "framer-motion";

const LoaderEllipse = ({
                         color,
                         width = '13vw',
                         height = '13vh',
                         rotationDirection,
                         rotationSpeed = 3
                       }) => {

  const gradientId = useId();

  return (
    <motion.svg
      animate={{rotate: rotationDirection ? -360 : 360}}
      transition={{
        ease: 'linear',
        duration: rotationSpeed,
        repeat: Infinity,
      }}

      width={width}
      height={height}
      viewBox="0 0 496 492"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M248 392C166.538 392 100.5 326.634 100.5 246C100.5 165.366 166.538 100 248 100C329.462 100 395.5 165.366 395.5 246C395.5 326.634 329.462 392 248 392Z"
        stroke={`url(#${gradientId})`} strokeWidth={'20vh'} strokeDasharray="6 6"/>
      <defs>
        <linearGradient id={gradientId} x1="259.667" y1="230.619" x2="-15.32" y2="217.15"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={color.firstColor}/>
          <stop offset="1" stopColor={color.secondColor}/>
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default LoaderEllipse;