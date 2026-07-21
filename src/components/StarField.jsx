import { useMemo } from "react";
import { motion } from "framer-motion";

const StarField = ({ count = 30 }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        const size = Math.random() * 1 + 1;
        return { id: i, startX, startY, endX, endY, duration, size };
      }),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map(({ id, startX, startY, endX, endY, duration, size }) => (
        <motion.div
          key={`star-${id}`}
          className="absolute rounded-full bg-white"
          style={{ width: `${size}px`, height: `${size}px` }}
          initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
          animate={{
            x: [`${startX}vw`, `${endX}vw`],
            y: [`${startY}vh`, `${endY}vh`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
