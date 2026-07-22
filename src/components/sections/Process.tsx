import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { steps } from '../../data/content';

export function Process() {
  return (
    <Section id="process" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            A four-step journey from <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">brief</span> to{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">placement</span>.
          </>
        }
        description="Disciplined, transparent and SLA-driven — so you always know exactly where your mandate stands."
      />

      <div className="relative mt-16">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[#E2E8F0] lg:block" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#7C3AED] lg:block"
        />

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative z-10 mb-6 flex items-center gap-4 lg:block">
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#7C3AED] shadow-xl ring-2 ring-[#7C3AED]/20 transition-all duration-300 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:ring-[#7C3AED]">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 grid h-7 min-w-7 place-items-center rounded-full bg-[#0F172A] px-2 text-xs font-black text-white ring-2 ring-white shadow-md">
                      {step.n}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A]">{step.title}</h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-[#475569]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}