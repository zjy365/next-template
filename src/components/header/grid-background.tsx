'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = ({ uniqueId }: { uniqueId: string }) => {
  return (
    <div className="flex w-60 flex-col items-start justify-center">
      <div className="flex items-center justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-900">
          <div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        </div>
        <svg
          width="300"
          height="1"
          viewBox="0 0 300 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-100 dark:text-neutral-800"
        >
          <path d="M0.5 0.5H479" stroke="currentColor"></path>
          <motion.path
            d="M0.5 0.5H479"
            stroke={`url(#gradient-${uniqueId})`}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
          <defs>
            <linearGradient
              id={`gradient-${uniqueId}`}
              gradientUnits="userSpaceOnUse"
              x1="49.02"
              y1="0"
              x2="190.53"
              y2="0"
            >
              <stop offset="0%" stopColor="transparent"></stop>
              <stop
                offset="50%"
                stopColor="rgba(var(--neutral-200), 0.1)"
              ></stop>
              <stop offset="100%" stopColor="transparent"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <svg
        width="1"
        height="140"
        viewBox="0 0 1 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-3 text-neutral-100 dark:text-neutral-800"
      >
        <path d="M0.5 0.5V479" stroke="currentColor" strokeWidth="2"></path>
        <motion.path
          d="M0.5 0.5V479"
          stroke={`url(#gradient-vertical-${uniqueId})`}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
        <defs>
          <linearGradient
            id={`gradient-vertical-${uniqueId}`}
            gradientUnits="userSpaceOnUse"
            x1="2"
            y1="-34.66"
            x2="2"
            y2="92.90"
          >
            <stop offset="0%" stopColor="transparent"></stop>
            <stop offset="50%" stopColor="var(--neutral-200)"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const GridBackground = () => {
  const gridWidthSize = 8;
  const gridHeightSize = 8;
  const rows = [];

  for (let i = 0; i < gridWidthSize; i++) {
    const cols = [];
    for (let j = 0; j < gridHeightSize; j++) {
      cols.push(<AnimatedBox key={`${i}-${j}`} uniqueId={`${i}-${j}`} />);
    }
    rows.push(
      <div key={i} className="flex">
        {cols}
      </div>,
    );
  }

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      {rows}
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,white)] dark:bg-black"></div>
    </div>
  );
};

export default GridBackground;
