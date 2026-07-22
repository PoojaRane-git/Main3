import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Section';
import { features } from '../../data/content';

export function WhyChooseUs() {
  const [hero, ...rest] = features;
  const HeroIcon = hero.icon;

  return (
    <Section id="why" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Talent Corner"
          title={
            <>
              A recruitment partner with the reach of a{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">national firm</span> and the rigour of a{' '}
              <span className="text-[#64748B] font-extrabold">boutique</span>.
            </>
          }
          description="We combine a pan-India presence with deep, vertical-specific expertise — so you get shortlists that actually convert into hires."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-6 lg:grid-rows-2">
          {/* Hero feature card */}
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#0F172A] p-8 text-white shadow-2xl ring-2 ring-[#7C3AED]/30 sm:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#7C3AED]/40 blur-[120px] transition-opacity duration-500 group-hover:bg-[#7C3AED]/60" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#7C3AED]/20 to-transparent" />

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDE9FE]/10 text-[#C084FC] ring-2 ring-[#7C3AED]/40 shadow-lg">
                  <HeroIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 max-w-md text-balance text-3xl font-black tracking-tight sm:text-4xl text-white">
                  {hero.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty text-base font-medium leading-relaxed text-[#94A3B8] sm:text-lg">
                  {hero.description}
                </p>
              </div>

              <div className="relative mt-12 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">28</div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#C084FC]">
                    <MapPin className="h-3.5 w-3.5 text-[#C084FC]" /> Offices across India
                  </div>
                </div>
                <div className="h-12 w-px bg-white/15" />
                <div>
                  <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">40+</div>
                  <div className="mt-1 text-xs font-semibold text-[#94A3B8]">Industries served</div>
                </div>
                <div className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] px-4 py-2 text-xs font-extrabold text-white shadow-lg ring-1 ring-white/20 transition-all group-hover:bg-[#6D28D9]">
                  Pan-India network <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Supporting cards */}
          {rest.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.title}
                delay={0.1 + i * 0.08}
                className="lg:col-span-2"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-7 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#C084FC] text-white shadow-lg shadow-purple-500/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#0F172A]">{f.title}</h3>
                  <p className="mt-2.5 text-sm font-medium leading-relaxed text-[#475569]">{f.description}</p>
                  <div className="mt-6 h-px w-full bg-[#E2E8F0]" />
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] transition-colors group-hover:text-[#6D28D9]">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
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