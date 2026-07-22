import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'Careers', to: '/careers' },
  { label: 'About', to: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          scrolled ? 'pt-2' : 'pt-4',
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'flex items-center justify-between gap-4 rounded-2xl px-3 transition-all duration-300 sm:px-4',
              scrolled
                ? 'glass h-14 shadow-soft ring-1 ring-ink-200/60'
                : 'h-16 bg-transparent',
            )}
          >
            <Link to="/" className="group flex items-center gap-2.5 pl-1">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-ink-900 text-white shadow-soft">
                <span className="font-display text-lg leading-none">T</span>
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold-400 ring-2 ring-white" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-ink-900">
                  Talent Corner
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">
                  HR Services
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      'relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors',
                      active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-xl bg-ink-100/80"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Button to="/careers" variant="ghost" size="sm">
                Explore Jobs
              </Button>
              <Button to="/contact" variant="dark" size="sm">
                Hire Talent
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl text-ink-700 ring-1 ring-ink-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass p-2 shadow-lift ring-1 ring-ink-200/60 lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100/80"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 p-1">
              <Button to="/careers" variant="secondary" size="md">
                Explore Jobs
              </Button>
              <Button to="/contact" variant="dark" size="md">
                Hire Talent
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
