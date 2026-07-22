import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowUpRight, Search, Building2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';
import { jobs, type Job } from '../data/content';

const statusStyles: Record<Job['status'], string> = {
  Open: 'bg-[#EDE9FE] text-[#7C3AED] ring-1 ring-[#7C3AED]/30',
  Urgent: 'bg-red-50 text-red-600 ring-1 ring-red-200',
  New: 'bg-purple-100 text-[#7C3AED] ring-1 ring-[#7C3AED]/40',
};

const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];

export default function Careers() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All');

  const filtered = jobs.filter((j) => {
    const matchesQuery =
      !query ||
      j.title.toLowerCase().includes(query.toLowerCase()) ||
      j.location.toLowerCase().includes(query.toLowerCase());
    const matchesDept = dept === 'All' || j.department === dept;
    return matchesQuery && matchesDept;
  });

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Find your next role through <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">Talent Corner</span>.
          </>
        }
        description="We recruit for India’s leading employers. Browse active mandates below — new roles open every week."
      />

      <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/3 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-2 ring-[#7C3AED]/15 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by role or location"
                  className="h-12 w-full rounded-xl bg-white pl-11 pr-4 text-sm font-medium text-[#0F172A] shadow-inner ring-2 ring-[#7C3AED]/20 placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDept(d)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      dept === d
                        ? 'bg-[#0F172A] text-white shadow-md'
                        : 'bg-white text-[#475569] ring-2 ring-[#7C3AED]/20 hover:text-[#0F172A] hover:ring-[#7C3AED]/50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:shadow-2xl transition-all"
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
                    <Button to="/contact" variant="secondary" size="sm" className="rounded-xl border border-[#7C3AED]/30 bg-[#EDE9FE]/50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-bold transition-all">
                      Apply <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 rounded-[2rem] bg-white p-12 text-center shadow-xl ring-2 ring-[#7C3AED]/15">
              <p className="text-sm font-medium text-[#475569]">
                No mandates match your search.{' '}
                <button onClick={() => { setQuery(''); setDept('All'); }} className="font-extrabold text-[#7C3AED] hover:underline">
                  Clear filters
                </button>
              </p>
            </div>
          )}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}