import { motion } from 'framer-motion';
import { Target, Heart, Users, Network, Award, TrendingUp } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { FinalCTA } from '../components/sections/FinalCTA';
import { stats } from '../data/content';

const values = [
  { icon: Heart, title: 'Human first', description: 'Behind every CV is a career. Behind every role is a team. We never forget either.' },
  { icon: Target, title: 'Outcomes, not activity', description: 'We measure ourselves on hires made, not resumes sent.' },
  { icon: Users, title: 'Partnership', description: 'We act as an extension of your team — not a vendor at arm’s length.' },
  { icon: Network, title: 'Reach', description: 'A 28-office footprint and a franchise model that reaches where others don’t.' },
  { icon: Award, title: 'Rigour', description: 'Structured assessments, reference checks and written reports on every shortlist.' },
  { icon: TrendingUp, title: 'Momentum', description: 'A 48-hour first shortlist SLA that respects your time and your market.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Recruiting India, <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">one hire at a time</span>, since 2003.
          </>
        }
        description="Talent Corner is one of India’s leading recruitment and HR consulting organisations — built on a nationwide network, a franchise model and an obsession with the right hire."
      />

      <Section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] px-8 py-14 text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.12] [background-size:24px_24px]" />
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#7C3AED]/30 blur-[100px]" />
            
            <div className="relative grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter to={s.value} className="text-4xl font-black tracking-tight sm:text-5xl text-white" />
                    {s.suffix && <span className="text-3xl font-black text-[#C084FC] sm:text-4xl">{s.suffix}</span>}
                  </div>
                  <div className="mt-3 text-base font-extrabold text-white">{s.label}</div>
                  <div className="mt-1 text-xs font-semibold text-[#94A3B8]">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-white via-[#FAF5FF]/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="What we believe"
            title={
              <>
                The values that shape <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">every mandate</span>.
              </>
            }
            description="They sound simple. Living them at scale, across 28 offices, is the hard part we’ve spent 22 years getting right."
            className="max-w-2xl"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="group h-full rounded-[2rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 transition-all duration-300 hover:-translate-y-1.5 hover:ring-[#7C3AED]/40 hover:shadow-2xl">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EDE9FE] text-[#7C3AED] ring-2 ring-[#7C3AED]/30 transition-colors group-hover:bg-[#7C3AED] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#0F172A]">{v.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#475569]">{v.description}</p>
                  </div>
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