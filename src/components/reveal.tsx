import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, slideControls, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { scale: 0, y: 75 },
          visible: { scale: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute inset-0 z-20 bg-primary/10"
      />
    </div>
  );
};
