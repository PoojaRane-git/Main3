import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';

const benefits = [
  {
    icon: Building2,
    title: 'Established Brand',
    desc: 'Leverage our 20+ years of brand equity and market reputation.',
  },
  {
    icon: Users,
    title: 'Training & Support',
    desc: 'Comprehensive training programs and ongoing operational support.',
  },
  {
    icon: TrendingUp,
    title: 'High ROI',
    desc: 'Proven business model with attractive revenue sharing.',
  },
  {
    icon: Shield,
    title: 'Low Risk',
    desc: 'Established processes minimize business risk.',
  },
];

const process = [
  {
    step: 1,
    title: 'Initial Inquiry',
    desc: 'Submit your interest and background details for evaluation.',
  },
  {
    step: 2,
    title: 'Discussion',
    desc: 'Meet with our franchise team to understand the opportunity.',
  },
  {
    step: 3,
    title: 'Agreement',
    desc: 'Sign the franchise agreement and complete formalities.',
  },
  {
    step: 4,
    title: 'Setup',
    desc: 'We help you set up office, systems, and train your team.',
  },
  {
    step: 5,
    title: 'Launch',
    desc: 'Go live with marketing support and initial leads.',
  },
  {
    step: 6,
    title: 'Growth',
    desc: 'Continuous support to scale your recruitment business.',
  },
];

const faqs = [
  {
    q: 'What is the initial investment required?',
    a: 'The initial investment ranges from INR 10-15 lakhs depending on location and setup. This includes franchise fee, office setup, and working capital.',
  },
  {
    q: 'What kind of support do you provide?',
    a: 'We provide complete training, access to our ATS software, recruitment process training, marketing support, and ongoing operational guidance.',
  },
  {
    q: 'How soon can I expect returns?',
    a: 'Most franchisees break even within 8-12 months and achieve profitability in the second year of operations.',
  },
  {
    q: 'Do I need recruitment experience?',
    a: 'While experience helps, it is not mandatory. We provide comprehensive training to get you up to speed quickly.',
  },
  {
    q: 'What territory do I get?',
    a: 'Each franchisee gets an exclusive territory to operate in, preventing internal competition.',
  },
];

const testimonials = [
  {
    name: 'Sanjay Kumar',
    location: 'Franchise Owner, Chennai',
    content: 'Partnering with Talent Corner was the best business decision I made. The support team helped me hit the ground running, and I achieved profitability in just 10 months.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Meera Joshi',
    location: 'Franchise Owner, Ahmedabad',
    content: 'The training and continuous support have been exceptional. Being part of the Talent Corner network has opened doors to clients I could never have reached independently.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Rahul Singh',
    location: 'Franchise Owner, Jaipur',
    content: 'From setup to scaling, the team at Talent Corner has been there every step. Their brand reputation makes client acquisition significantly easier.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Franchise() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="Franchise Opportunity"
        title={
          <>
            Own a <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">Recruitment Business</span>
          </>
        }
        description="Partner with India's trusted talent acquisition brand. Build your own successful recruitment business with our proven model and support."
      />

      {/* Hero Content Grid */}
      <Section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                Scale your entrepreneurial journey with a proven leader.
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#475569] max-w-xl mb-8 leading-relaxed">
                Take full advantage of our end-to-end framework, robust technology stack, and unmatched market equity to build a flourishing regional recruitment franchise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="lg" className="rounded-xl bg-[#7C3AED] text-base font-bold text-white shadow-lg hover:bg-[#6D28D9] transition-all py-4">
                  Apply Now <ArrowRight className="h-5 w-5" />
                </Button>
                <a href="#process">
                  <Button variant="secondary" size="lg" className="rounded-xl border-2 border-[#7C3AED]/30 bg-white text-[#7C3AED] hover:bg-[#EDE9FE] text-base font-bold transition-all py-4 w-full sm:w-auto">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[28rem] rounded-[2.5rem] overflow-hidden shadow-2xl ring-2 ring-[#7C3AED]/15">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Business partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-[2rem] bg-white shadow-2xl ring-2 ring-[#7C3AED]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#C084FC] flex items-center justify-center text-white font-black text-xl shadow-md">
                    15+
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-[#0F172A]">Active Franchises</div>
                    <div className="text-sm font-semibold text-[#64748B]">Across India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="relative overflow-hidden py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why Partner With Us?"
            title={<>Build your recruitment business on a <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">foundation of success</span>.</>}
            description="Discover the core pillars that ensure your franchise thrives from day one."
            className="mx-auto max-w-3xl"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="h-full text-center p-8 rounded-[2rem] bg-white shadow-lg ring-1 ring-[#7C3AED]/15 hover:ring-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center mx-auto mb-6 ring-2 ring-[#7C3AED]/30 shadow-md">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-base font-medium text-[#475569] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Details */}
      <Section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F3E8FF]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] mb-6">
                Transparent <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent">Investment Structure</span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#475569] mb-8 leading-relaxed">
                We've designed our franchise model to be accessible while ensuring you have everything you need to scale profitably.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-[#7C3AED]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0F172A]">Franchise Fee</h4>
                    <p className="text-sm font-medium text-[#475569]">INR 5 Lakhs one-time fee</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-[#7C3AED]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0F172A]">Setup Cost</h4>
                    <p className="text-sm font-medium text-[#475569]">INR 5-8 Lakhs for office and infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-[#7C3AED]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0F172A]">Working Capital</h4>
                    <p className="text-sm font-medium text-[#475569]">INR 2-3 Lakhs for initial operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-[#7C3AED]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0F172A]">Revenue Share</h4>
                    <p className="text-sm font-medium text-[#475569]">Competitive 70-80% billing retained by franchisee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-[#0F172A] text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <Award className="w-14 h-14 mb-6 text-[#C084FC]" />
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Expected Returns</h3>
                <div className="my-8">
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white">18-24%</div>
                    <div className="text-sm font-semibold text-[#94A3B8] mt-1">Expected ROI</div>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="w-full rounded-xl bg-[#7C3AED] text-base font-bold text-white shadow-lg hover:bg-[#6D28D9] transition-all py-4">
                    Get Financial Details <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section id="process" className="relative overflow-hidden py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Onboarding Roadmap"
            title={<>Getting Started is <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">Easy & Structured</span>.</>}
            description="Our streamlined process gets you from inquiry to launch within 60 days."
            className="mx-auto max-w-3xl"
          />

          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED]/20 via-[#7C3AED] to-[#7C3AED]/20 rounded-full" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.step} className="relative p-8 rounded-[2rem] bg-white shadow-lg ring-1 ring-[#7C3AED]/15 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#C084FC] text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-md">
                    {step.step}
                  </div>
                  <h3 className="font-extrabold text-xl text-[#0F172A] mb-3">{step.title}</h3>
                  <p className="text-base font-medium text-[#475569] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-white via-[#FAF5FF]/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Success Stories"
            title={<>Hear from our <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">thriving partners</span>.</>}
            description="Real stories from franchise owners who built successful recruitment enterprises with us."
            className="mx-auto max-w-3xl"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.name} className="p-8 rounded-[2rem] bg-white shadow-lg ring-1 ring-[#7C3AED]/15 flex flex-col justify-between h-full">
                <p className="text-base font-medium text-[#475569] mb-8 italic leading-relaxed">"{item.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#E2E8F0]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#7C3AED]/30"
                  />
                  <div>
                    <div className="font-extrabold text-base text-[#0F172A]">{item.name}</div>
                    <div className="text-sm font-semibold text-[#7C3AED]">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="relative overflow-hidden py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
    align="center"
    eyebrow="Got Questions?"
    title={
      <>
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent font-black">
          Questions
        </span>
        .
      </>
    }
    description="Everything you need to know about starting your Talent Corner franchise."
    className="mx-auto max-w-2xl"
  />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="overflow-hidden rounded-[1rem] ring-1 ring-[#7C3AED]/15 shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left sm:p-8 cursor-pointer focus:outline-none"
                  >
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] pr-4">{faq.q}</h3>
                    <span className={`grid h-10 w-10 flex-shrink-0 place-items-center bg-white text-[#7C3AED] ring-1 ring-[#7C3AED]/25 shadow-sm transition-transform duration-200 ${isOpen ? ' text-white' : ''}`}>
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                      <p className="text-base font-medium text-[#475569] leading-relaxed border-t border-[#7C3AED]/15 pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}