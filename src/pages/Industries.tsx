import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { FinalCTA } from '../components/sections/FinalCTA';
import { industries } from '../data/content';

const industryBlurbs: Record<string, string> = {
  'IT & SaaS': 'Product, engineering, data and DevOps talent for high-growth technology businesses.',
  BFSI: 'Compliance-aware hiring for banks, NBFCs, insurance and capital markets.',
  Healthcare: 'Clinical, operations and leadership talent for hospitals, pharma and diagnostics.',
  Manufacturing: 'Plant, maintenance, supply chain and quality talent for industrial enterprises.',
  Retail: 'Store, regional and category leadership for modern retail and D2C brands.',
  FMCG: 'Sales, distribution and brand talent for fast-moving consumer goods.',
  Logistics: 'Operations, fleet and warehouse talent for 3PL, e-commerce and cold chain.',
  Education: 'Academic, admissions and leadership talent for schools, colleges and EdTech.',
  Telecom: 'Network, sales and enterprise talent for operators and infrastructure providers.',
  Engineering: 'Design, project and R&D talent for EPC and heavy engineering firms.',
  Pharmaceutical: 'Regulatory, R&D and field force talent for pharma and life sciences.',
  'Real Estate': 'Sales, project and CRM talent for developers and property platforms.',
};

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            Specialised teams for <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">every sector</span> that hires.
          </>
        }
        description="Vertical leads who understand your industry’s language, compliance and talent market — not generalists learning on the job."
      />

      <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/3 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0F172A] text-base font-extrabold text-white shadow-lg transition-colors group-hover:bg-[#7C3AED]">
                    {ind.charAt(0)}
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A]">{ind}</h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#475569]">
                  {industryBlurbs[ind] ?? 'Specialised recruitment teams for this sector.'}
                </p>
                <div className="mt-6 h-px w-full bg-[#E2E8F0]" />
                <div className="mt-4 text-xs font-bold text-[#7C3AED]">Active mandates</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}