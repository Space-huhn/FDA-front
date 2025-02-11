"use client"
import React, {useId} from "react";
import {motion} from "framer-motion";

const LoaderEllipse = ({
                         color,
                         width = '10vw',
                         height = '10vh',
                         rotationDirection,
                         rotationSpeed = 3,
                         fadeInDirection
                       }) => {

  const gradientId = useId();

  const fadeDirection = () => {
    if (fadeInDirection === "top") return {x: ['-30%', 0], y: ["-100%", 0]};
    if (fadeInDirection === "bottom") return {x: ["30%", 0], y: ["100%", 0]};
    return {x: [0, 0], y: [0, 0]}; // Default case
  };

  const fadeCoordonate = fadeDirection();

  return (
    <motion.svg
      animate={{
        rotate: rotationDirection ? -360 : 360,
        x: fadeCoordonate.x,
        y: fadeCoordonate.y
      }}
      transition={{
        rotate: {ease: 'linear', duration: rotationSpeed, repeat: Infinity},
        x: {ease: [.47, 1.64, .41, .6], duration: .6},
        y: {ease: [.47, 1.64, .41, .6], duration: .6}
      }}

      width={width}
      height={height}
      viewBox="0 0 496 492"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M248 392C166.538 392 100.5 326.634 100.5 246C100.5 165.366 166.538 100 248 100C329.462 100 395.5 165.366 395.5 246C395.5 326.634 329.462 392 248 392Z"
        stroke={`url(#${gradientId})`} strokeWidth={'15vh'} strokeDasharray="6 6"/>
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