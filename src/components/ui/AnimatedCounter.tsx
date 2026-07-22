import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

type Props = {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
};

export function AnimatedCounter({ to, duration = 1.8, format, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  useEffect(() => {
    spring.set(to);
  }, [to, spring]);

  const value = format ? format(display) : Math.round(display).toLocaleString('en-IN');
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
