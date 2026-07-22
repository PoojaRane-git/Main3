import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Instagram } from 'lucide-react';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Executive Recruitment', to: '/services' },
      { label: 'Campus Recruitment', to: '/services' },
      { label: 'CXO Search', to: '/services' },
      { label: 'Recruitment Franchise', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Process', to: '/process' },
      { label: 'Industries', to: '/industries' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Featured Jobs', to: '/careers' },
      { label: 'For Employers', to: '/contact' },
      { label: 'Partner With Us', to: '/contact' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white text-ink-900">
                <span className="font-display text-xl leading-none">T</span>
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-400 ring-2 ring-ink-950" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Talent Corner</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">
                  HR Services
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              One of India’s leading recruitment and HR consulting organisations, helping companies
              hire the right talent across industries since 2003.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:hello@talentcorner.in" className="flex items-center gap-2.5 text-ink-300 hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" /> hello@talentcorner.in
              </a>
              <a href="tel:+912266661111" className="flex items-center gap-2.5 text-ink-300 hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" /> +91 22 6666 1111
              </a>
              <p className="flex items-center gap-2.5 text-ink-300">
                <MapPin className="h-4 w-4 text-brand-400" /> Mumbai · 28 offices across India
              </p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Talent Corner HR Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-ink-900 transition-transform hover:scale-[1.02]"
            >
              Hire Talent <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
