"use client";

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
