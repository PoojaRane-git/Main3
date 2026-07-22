import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { stats } from '../../data/content';

export function Statistics() {
  return (
    <Section className="py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] px-8 py-16 text-white shadow-2xl ring-2 ring-[#7C3AED]/30 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#7C3AED]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#C084FC]/30 blur-[120px]" />

        <div className="relative grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="flex items-baseline gap-1">
                <AnimatedCounter
                  to={s.value}
                  className="text-5xl font-black tracking-tight text-white sm:text-6xl drop-shadow-sm"
                />
                {s.suffix && (
                  <span className="text-4xl font-extrabold text-[#C084FC] sm:text-5xl">{s.suffix}</span>
                )}
              </div>
              <div className="mt-3 text-base font-bold text-white tracking-wide">{s.label}</div>
              <div className="mt-1.5 text-sm font-medium text-[#94A3B8]">{s.sub}</div>
              <div className="mt-5 h-0.5 w-full bg-gradient-to-r from-[#7C3AED]/80 via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}