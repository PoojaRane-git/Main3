import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'gold';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps & HTMLMotionProps<'button'> & { to?: undefined };
type ButtonAsLink = BaseProps & { to: string } & Omit<HTMLMotionProps<'a'>, 'href'>;

type Props = (ButtonAsButton | ButtonAsLink) & {
  variant?: Variant;
  size?: Size;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_rgba(124,58,237,0.55)]',
  secondary:
    'bg-white text-[#7C3AED] ring-1 ring-[#7C3AED]/30 hover:ring-[#7C3AED]/60 hover:bg-[#FAF5FF]',
  ghost: 'bg-transparent text-[#7C3AED] hover:bg-[#FAF5FF]',
  dark: 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_10px_30px_-10px_rgba(15,23,42,0.5)]',
  gold: 'bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_8px_24px_-8px_rgba(251,191,36,0.5)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-xl gap-1.5',
  md: 'h-11 px-5 text-sm rounded-xl gap-2',
  lg: 'h-13 px-7 text-[15px] rounded-2xl gap-2.5',
};

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    const classes = cn(
      'group relative inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50 focus-visible:ring-offset-2',
      variants[variant],
      sizes[size],
      className,
    );

    const inner = (
      <>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <span className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[shimmer_1.4s_linear_infinite]" />
          </span>
        )}
      </>
    );

    if ('to' in rest && rest.to) {
      const { to, ...aRest } = rest as ButtonAsLink;
      void aRest;
      return (
        <Link to={to} className={classes}>
          {inner}
        </Link>
      );
    }

    const buttonProps = rest as ButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileTap={{ scale: 0.98 }}
        {...buttonProps}
      >
        {inner}
      </motion.button>
    );
  },
);
Button.displayName = 'Button';