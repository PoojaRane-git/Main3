import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { industries } from '../../data/content';

export function Industries() {
  return (
    <Section id="industries" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Specialised teams for <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">every sector</span> that hires.
            </>
          }
          description="Vertical leads who understand your industry’s language, compliance and talent market — not generalists learning on the job."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="group relative cursor-default overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1E293B] shadow-lg ring-2 ring-[#7C3AED]/20 hover:shadow-xl hover:ring-[#7C3AED] transition-all"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{ind}</span>
              <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-[#7C3AED] to-[#C084FC] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-sm font-medium text-[#475569]"
        >
          Don’t see your sector?{' '}
          <a href="/contact" className="font-extrabold text-[#7C3AED] underline-offset-4 hover:underline">
            Talk to us
          </a>{' '}
          — we likely already recruit for it.
        </motion.p>
      </div>
    </Section>
  );
}