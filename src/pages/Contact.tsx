import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Check, PhoneCall } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const initial: FormState = { name: '', email: '', company: '', role: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about your <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">hiring</span>.
          </>
        }
        description="Tell us about your mandate. We’ll bring you a verified shortlist within 48 hours — and stay with you until the offer is signed."
      />

      <Section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/3 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE9FE]/50 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl ring-2 ring-[#7C3AED]/15 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#EDE9FE] text-[#7C3AED] ring-2 ring-[#7C3AED]/30 shadow-md">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-3xl font-black tracking-tight text-[#0F172A]">Message received</h3>
                  <p className="mt-3 max-w-md text-base font-medium text-[#475569]">
                    Thanks for reaching out. A Talent Corner partner will get back to you within one
                    working day.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" size="md" className="mt-8 rounded-xl border border-[#7C3AED]/30 bg-[#EDE9FE]/50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white text-base font-bold transition-all">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" name="name" value={form.name} onChange={update('name')} placeholder="Ananya Mehra" required />
                    <Field label="Work email" name="email" type="email" value={form.email} onChange={update('email')} placeholder="ananya@company.in" required />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Company" name="company" value={form.company} onChange={update('company')} placeholder="NorthBridge Consumer" required />
                    <Field label="Your role" name="role" value={form.role} onChange={update('role')} placeholder="VP — Human Capital" />
                  </div>
                  <div>
                    <label className="mb-2 block text-base font-extrabold text-[#0F172A]">
                      Tell us about your mandate
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={update('message')}
                      rows={5}
                      placeholder="We’re hiring 14 regional sales managers across the west zone over the next two quarters…"
                      className="w-full resize-none rounded-xl bg-white px-4 py-3.5 text-base font-medium text-[#0F172A] shadow-inner ring-2 ring-[#7C3AED]/20 placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full rounded-xl bg-[#7C3AED] text-lg font-black text-white shadow-lg hover:bg-[#6D28D9] transition-all py-4">
                    Send message <ArrowUpRight className="h-5 w-5" />
                  </Button>
                  <p className="text-center text-sm font-semibold text-[#64748B]">
                    No spam. We’ll only use this to reply about your hiring.
                  </p>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[2.5rem] bg-[#0F172A] p-8 text-white shadow-2xl sm:p-10">
                <h3 className="text-2xl font-extrabold tracking-tight">Reach us directly</h3>
                <div className="mt-6 space-y-5 text-base font-medium">
                  <a href="mailto:hello@talentcorner.in" className="flex items-center gap-4 text-[#94A3B8] hover:text-white transition-colors">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Mail className="h-5 w-5 text-[#C084FC]" />
                    </span>
                    hello@talentcorner.in
                  </a>
                  <a href="tel:+912266661111" className="flex items-center gap-4 text-[#94A3B8] hover:text-white transition-colors">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Phone className="h-5 w-5 text-[#C084FC]" />
                    </span>
                    +91 22 6666 1111
                  </a>
                  <div className="flex items-center gap-4 text-[#94A3B8]">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <MapPin className="h-5 w-5 text-[#C084FC]" />
                    </span>
                    Mumbai HQ · 28 offices across India
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-white p-8 shadow-xl ring-2 ring-[#7C3AED]/15 sm:p-10">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">Prefer to talk?</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-[#475569]">
                  Book a 20-minute discovery call with a partner. We’ll listen to your mandate and tell
                  you honestly whether we’re the right fit.
                </p>
                <a href="tel:+912266661111" className="mt-6 inline-flex">
                  <Button variant="dark" size="md" className="rounded-xl bg-[#0F172A] text-base font-bold text-white shadow-lg hover:bg-[#7C3AED] transition-all">
                    <PhoneCall className="h-5 w-5" /> Book a call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-base font-extrabold text-[#0F172A]">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full  bg-white px-4 text-base font-medium text-[#0F172A] shadow-inner ring-2 ring-[#7C3AED]/20 placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
      />
    </div>
  );
}