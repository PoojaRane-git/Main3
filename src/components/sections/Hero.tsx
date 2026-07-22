import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, BadgeCheck, Users2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { trustBadges } from '../../data/content';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#EDE9FE]/60 blur-[130px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#F5F3FF]/70 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <div className="pt-6 lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1E293B] shadow-lg ring-2 ring-[#7C3AED]/30"
            >
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
              </span>
              <span className="relative text-[#7C3AED] font-extrabold tracking-wide">Recruiting India since 2003</span>
              <span className="text-[#CBD5E1]">·</span>
              <span className="text-[#475569] font-semibold">28 offices</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.06 }}
              className="mt-6 text-balance text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-6xl md:text-7xl lg:text-[4.4rem]"
            >
              We hire the people who
              <br className="hidden sm:block" />{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C084FC] bg-clip-text text-transparent drop-shadow-sm">
                  move companies
                </span>
                <svg
                  className="absolute -bottom-2.5 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 9C70 3 230 2 298 6"
                    stroke="url(#g)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease }}
                  />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#7C3AED" />
                      <stop offset="1" stopColor="#E879F9" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.14 }}
              className="mt-6 max-w-xl text-pretty text-lg font-medium leading-relaxed text-[#334155] sm:text-xl"
            >
              <strong className="text-[#7C3AED] font-bold">Talent Corner</strong> is one of India’s leading recruitment and HR consulting organisations.
              We help companies hire the right talent across industries — through a nationwide
              network, a 2.5 lakh-strong candidate database, and a franchise model that reaches
              where others don’t.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.22 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button to="/contact" variant="primary" size="lg" className="text-base font-bold shadow-xl shadow-purple-500/20 bg-[#7C3AED]">
                Hire Talent
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button to="/services" variant="secondary" size="lg" className="text-base font-bold">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-base font-semibold text-[#1E293B]">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#EDE9FE] text-[#7C3AED] shadow-sm ring-1 ring-[#7C3AED]/30">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full sm:aspect-[5/5]">
      {/* Main image card */}
      <div className="absolute inset-0 overflow-hidden rounded-5xl bg-[#F1F5F9] shadow-2xl ring-2 ring-[#7C3AED]/20">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1100"
          alt="Recruitment team in conversation"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#0F172A]/20 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm font-bold text-[#1E293B] shadow-lg ring-1 ring-white/40">
          <Sparkles className="h-4 w-4 text-[#C084FC]" />
          ✨ 48-hour first shortlist
        </div>
      </div>

      {/* Floating stat card — bottom left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 bottom-10 w-48 rounded-3xl bg-white p-5 shadow-2xl ring-2 ring-[#7C3AED]/20 sm:-left-8"
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <TrendingUp className="h-4 w-4 text-[#7C3AED]" /> Placement rate
        </div>
        <div className="mt-2 text-4xl font-black tracking-tight text-[#0F172A]">94%</div>
        <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#EDE9FE]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '94%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease, delay: 0.6 }}
            className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]"
          />
        </div>
        <p className="mt-2.5 text-xs font-semibold text-[#475569]">Roles closed within 90 days</p>
      </motion.div>

      {/* Floating candidate card — top right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -right-3 top-12 w-56 rounded-3xl bg-white p-5 shadow-2xl ring-2 ring-[#7C3AED]/20 sm:-right-6"
      >
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
            alt="Shortlisted candidate"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-[#7C3AED]"
          />
          <div>
            <div className="text-base font-bold text-[#0F172A]">Shortlist ready</div>
            <div className="text-xs font-medium text-[#64748B]">5 candidates · Senior role</div>
          </div>
        </div>
        <div className="mt-3.5 flex items-center gap-2">
          {[BadgeCheck, Users2, Sparkles].map((Icon, i) => (
            <span
              key={i}
              className="grid h-8 w-8 place-items-center rounded-xl bg-[#EDE9FE] text-[#7C3AED] ring-1 ring-[#7C3AED]/30"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
          <span className="ml-auto rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-extrabold text-white shadow-md">
            Verified
          </span>
        </div>
      </motion.div>

      {/* Decorative ring */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full border-2 border-dashed border-[#7C3AED]/40" />
    </div>
  );
}