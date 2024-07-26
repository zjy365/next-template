'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import './index.css';

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <motion.div
        whileInView={{ x: 200, rotate: 90, scale: 2 }}
        transition={{ duration: 5, type: 'spring' }}
      >
        123123
      </motion.div>
    </div>
  );
};
