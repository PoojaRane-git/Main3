import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Section';
import { Button } from '../ui/Button';
import { services } from '../../data/content';

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title={
              <>
                Recruitment solutions for every{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">hiring mandate</span>.
              </>
            }
            description="From high-volume campus drives to confidential CXO search — one partner, one process, every seniority."
            className="max-w-2xl"
          />
          <Button to="/services" variant="secondary" size="md" className="shrink-0 rounded-xl border-2 border-[#7C3AED]/30 bg-white font-bold text-[#7C3AED] shadow-md hover:bg-[#7C3AED] hover:text-white transition-all">
            View All Services
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-7 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
                >
                  {/* hover gradient */}
                  <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#7C3AED]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#C084FC] text-white shadow-lg shadow-purple-500/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#7C3AED] ring-1 ring-[#7C3AED]/20">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-extrabold tracking-tight text-[#0F172A]">
                    {s.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm font-medium leading-relaxed text-[#475569]">
                    {s.description}
                  </p>

                  <ul className="relative mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-xs font-semibold text-[#334155]">
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-[#EDE9FE] text-[#7C3AED]">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-sm font-bold text-[#7C3AED] transition-colors group-hover:text-[#6D28D9]">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}