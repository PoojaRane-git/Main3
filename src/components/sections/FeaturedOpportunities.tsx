import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowUpRight, Building2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Section';
import { Button } from '../ui/Button';
import { jobs, type Job } from '../../data/content';

const statusStyles: Record<Job['status'], string> = {
  Open: 'bg-[#EDE9FE] text-[#7C3AED] ring-1 ring-[#7C3AED]/30',
  Urgent: 'bg-red-50 text-red-600 ring-1 ring-red-200',
  New: 'bg-purple-100 text-[#7C3AED] ring-1 ring-[#7C3AED]/40',
};

export function FeaturedOpportunities() {
  return (
    <Section id="opportunities" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Opportunities"
            title={
              <>
                Open mandates you can <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">apply to today</span>.
              </>
            }
            description="A snapshot of active roles we’re currently hiring for. New mandates open every week."
            className="max-w-2xl"
          />
          <Button to="/careers" variant="dark" size="md" className="shrink-0 rounded-xl bg-[#0F172A] font-bold text-white shadow-lg hover:bg-[#7C3AED] transition-all">
            Browse All Jobs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-7 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${statusStyles[job.status]}`}>
                    {job.status}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">{job.posted}</span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#0F172A]">{job.title}</h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED]">
                  <Building2 className="h-4 w-4" /> {job.department}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3.5 text-xs font-medium text-[#475569]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#7C3AED]" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#7C3AED]" /> {job.experience}
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#7C3AED]" /> {job.type}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E2E8F0] pt-5">
                  <span className="text-xs font-semibold text-[#64748B]">Apply via Talent Corner</span>
                  <Button to="/careers" variant="secondary" size="sm" className="rounded-xl border border-[#7C3AED]/30 bg-[#EDE9FE]/50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-bold transition-all">
                    Apply
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}