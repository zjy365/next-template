'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const AnimatedBox = ({
  uniqueId,
  rowIndex,
  colIndex,
}: {
  uniqueId: string;
  rowIndex: number;
  colIndex: number;
}) => {
  const delay = (rowIndex + colIndex) * 1;

  return (
    <div className="flex w-60 flex-col items-start justify-center">
      <div className="flex items-center justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-900">
          <div className="h-2 w-2 rounded-full bg-neutral-200/30 dark:bg-neutral-700"></div>
        </div>
        <svg
          width="300"
          height="1"
          viewBox="0 0 300 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-100 dark:text-neutral-800"
        >
          <path
            d="M0.5 0.5H479"
            stroke="rgba(224, 224, 224, 0.2)"
            className="dark:stroke-[rgba(70,70,70,0.2)]"
            strokeWidth="1"
          ></path>
          <motion.path
            d="M0 0.5H120"
            stroke={`url(#gradient-h-${uniqueId})`}
            strokeWidth="1"
            initial={{ translateX: -100 }}
            animate={{ translateX: 300 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: [0.5, 0, 0.5, 1],
              delay: delay,
            }}
          />
          <defs>
            <linearGradient
              id={`gradient-h-${uniqueId}`}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="120"
              y2="0"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" className="stop-light dark:stop-dark" />
              <stop offset="100%" stopColor="transparent" />
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
        <path
          d="M0.5 0.5V479"
          stroke="rgba(224, 224, 224, 0.2)"
          className="dark:stroke-[rgba(70,70,70,0.2)]"
          strokeWidth="1"
        ></path>
        <motion.path
          d="M0.5 0V60"
          stroke={`url(#gradient-v-${uniqueId})`}
          strokeWidth="1"
          initial={{ translateY: -60 }}
          animate={{ translateY: 140 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: [0.5, 0, 0.5, 1],
            delay: delay + 0.5,
          }}
        />
        <defs>
          <linearGradient
            id={`gradient-v-${uniqueId}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="60"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" className="stop-light dark:stop-dark" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const GridBackground = () => {
  const gridRows = 9;
  const gridColumns = 8;
  const rows = [];

  for (let i = 0; i < gridRows; i++) {
    const cols = [];
    for (let j = 0; j < gridColumns; j++) {
      cols.push(
        <AnimatedBox
          key={`${i}-${j}`}
          uniqueId={`${i}-${j}`}
          rowIndex={i}
          colIndex={j}
        />,
      );
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
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-white bg-opacity-50 backdrop-blur-sm [mask-image:radial-gradient(ellipse_at_center,transparent,white)] dark:bg-black dark:bg-opacity-50"></div>
    </div>
  );
};
