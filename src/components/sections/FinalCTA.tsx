import { motion } from 'framer-motion';
import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function FinalCTA() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-5xl bg-ink-950 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        {/* decorative */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-gold-500/20 blur-[110px]" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Let’s build your team
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
            Hire the people who move your company forward.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
            Tell us about your mandate. We’ll bring you a verified shortlist within 48 hours — and
            stay with you until the offer is signed.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="primary"className="bg-[#7C3AED]" size="lg">
              Hire Talent
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/15">
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-xs text-ink-400">
            No spam. No obligation. Just a real conversation about your hiring.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
