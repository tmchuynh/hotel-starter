import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { JSX, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: JSX.Element[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "gap-2 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group block relative p-2 w-full h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="block z-10 absolute inset-0 bg-muted dark:bg-muted/80 rounded-3xl w-full h-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.35 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.35, delay: 0.25 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="z-20 rounded-2xl max-w-full overflow-hidden">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
