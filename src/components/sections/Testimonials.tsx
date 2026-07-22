import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Section';
import { testimonials } from '../../data/content';

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title={
            <>
              Trusted by hiring leaders across <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">India Inc.</span>
            </>
          }
          description="From high-volume sales floors to confidential C-suite mandates — here’s what our clients say."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
              >
                <Quote className="absolute right-6 top-6 h-12 w-12 text-[#EDE9FE] transition-colors group-hover:text-[#7C3AED]/20" />

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s < t.rating ? 'fill-[#EAB308] text-[#EAB308]' : 'fill-[#E2E8F0] text-[#CBD5E1]'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="relative mt-6 flex-1 text-pretty text-base font-medium leading-relaxed text-[#334155]">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-[#E2E8F0] pt-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#7C3AED]/30 shadow-md"
                  />
                  <div>
                    <div className="text-base font-extrabold text-[#0F172A]">{t.name}</div>
                    <div className="text-xs font-semibold text-[#64748B]">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}