"use client"
import React from "react";
import styles from './LoaderEllipse.module.css';

const LoaderEllipse = () => {
  return (
    <div className={styles.containerStyles}>
        <svg className={styles.circularStyles} width="400" height="400" viewBox="0 0 496 492"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M248 392C166.538 392 100.5 326.634 100.5 246C100.5 165.366 166.538 100 248 100C329.462 100 395.5 165.366 395.5 246C395.5 326.634 329.462 392 248 392Z"
            stroke="url(#paint0_linear_383_2)" strokeWidth="200" strokeDasharray="6 6"/>
          <defs>
            <linearGradient id="paint0_linear_383_2" x1="259.667" y1="230.619" x2="-15.32" y2="217.15"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD88C"/>
              <stop offset="1" stopColor="#FF7622"/>
            </linearGradient>
          </defs>
        </svg>
    </div>
  );
};

export default LoaderEllipse;