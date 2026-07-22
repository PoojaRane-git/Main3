import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';
import { services } from '../data/content';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Recruitment solutions for <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">every mandate</span>.
          </>
        }
        description="From high-volume campus drives to confidential CXO search — one partner, one process, every seniority."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/contact" variant="primary" size="lg" className="rounded-xl bg-[#7C3AED] font-bold text-white shadow-lg hover:bg-[#6D28D9] transition-all">
            Hire Talent <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button to="/process" variant="secondary" size="lg" className="rounded-xl border border-[#7C3AED]/30 bg-[#EDE9FE]/50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-bold transition-all">
            See Our Process
          </Button>
        </div>
      </PageHero>

      <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
                  >
                    <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#EDE9FE]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F172A] text-white shadow-lg transition-transform group-hover:scale-105 group-hover:bg-[#7C3AED]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-[#EDE9FE] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#7C3AED] ring-1 ring-[#7C3AED]/30">
                        {s.tag}
                      </span>
                    </div>
                    <h2 className="relative mt-6 text-2xl font-extrabold tracking-tight text-[#0F172A]">
                      {s.title}
                    </h2>
                    <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#475569]">
                      {s.description}
                    </p>
                    <ul className="relative mt-6 grid grid-cols-2 gap-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-semibold text-[#334155]">
                          <span className="grid h-4 w-4 place-items-center rounded-full bg-[#EDE9FE] text-[#7C3AED]">
                            <Check className="h-3 w-3" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-8 border-t border-[#E2E8F0] pt-5">
                      <Button to="/contact" variant="secondary" size="sm" className="rounded-xl border border-[#7C3AED]/30 bg-[#EDE9FE]/50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-bold transition-all">
                        Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}