import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const SPRING = { stiffness: 150, damping: 18, mass: 0.5 };

// Cursor-tracked 3D tilt wrapper: the card rotates toward the pointer in real
// perspective space and its content pops forward on a separate Z layer, so
// the background art and the text read as two physically distinct depths.
const TiltCard = ({
  children,
  overlay = null,
  className = "",
  rotatorClassName = "",
  contentClassName = "",
  maxTilt = 8,
  liftZ = 24,
  glare = true,
  as: Component = motion.div,
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const hoverProgress = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [maxTilt, -maxTilt]),
    SPRING
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-maxTilt, maxTilt]),
    SPRING
  );
  const lift = useSpring(
    useTransform(hoverProgress, [0, 1], [0, liftZ]),
    SPRING
  );
  const glareOpacity = useSpring(hoverProgress, { stiffness: 200, damping: 24 });
  const glareBackground = useTransform(
    [pointerX, pointerY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,0.22), transparent 55%)`
  );

  const handlePointerMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerEnter = () => {
    if (!reduceMotion) hoverProgress.set(1);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
    hoverProgress.set(0);
  };

  return (
    <Component
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cx("[perspective:1200px]", className)}
      {...props}
    >
      <motion.div
        className={cx(
          "relative h-full w-full [transform-style:preserve-3d]",
          rotatorClassName
        )}
        style={reduceMotion ? undefined : { rotateX, rotateY }}
      >
        {overlay}

        <motion.div
          className={cx(
            "relative z-10 h-full w-full [transform-style:preserve-3d]",
            contentClassName
          )}
          style={reduceMotion ? undefined : { translateZ: lift }}
        >
          {children}
        </motion.div>

        {glare && !reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
            style={{ opacity: glareOpacity, background: glareBackground }}
          />
        )}
      </motion.div>
    </Component>
  );
};

export default TiltCard;
