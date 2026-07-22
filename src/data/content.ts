import {
  Briefcase,
  GraduationCap,
  Crown,
  Store,
  Search,
  ClipboardCheck,
  Users,
  Sparkles,
  ShieldCheck,
  Network,
  Building2,
  Clock,
  type LucideIcon,
} from 'lucide-react';

export type Stat = { value: number; suffix?: string; label: string; sub: string };
export const stats: Stat[] = [
  { value: 1200, suffix: '+', label: 'Clients Served', sub: 'Across 40+ industries' },
  { value: 20000, suffix: '+', label: 'Candidates Placed', sub: 'Permanent & leadership roles' },
  { value: 100, suffix: '+', label: 'Offices Across India', sub: 'And growing every quarter' },
  { value: 25, suffix: '+', label: 'Years of Experience', sub: 'Since 2002, recruiting India' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};
export const features: Feature[] = [
  {
    icon: Network,
    title: 'Nationwide Recruitment Network',
    description:
      'A 28-office footprint and a franchise model that reaches Tier-1, Tier-2 and Tier-3 cities — sourcing talent where your competitors are not looking.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Users,
    title: '2.5L+ Candidate Database',
    description: 'A continuously enriched pool of pre-screened professionals across every major function and seniority.',
    accent: 'from-gold-400 to-gold-600',
  },
  {
    icon: Sparkles,
    title: 'Industry-Specific Expertise',
    description: 'Dedicated vertical leads who speak the language of your sector — from BFSI compliance to engineering specs.',
    accent: 'from-ink-700 to-ink-900',
  },
  {
    icon: Clock,
    title: '48-Hour First Shortlist',
    description: 'A disciplined, SLA-driven process that puts vetted candidates in front of your hiring panel in two working days.',
    accent: 'from-brand-400 to-brand-600',
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  tag: string;
};
export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Executive Recruitment',
    description:
      'Mid-to-senior permanent hiring across functions — from area managers to functional heads — with a rigorous multi-stage assessment.',
    bullets: ['Permanent hiring', 'Function-agnostic', '90-day replacement'],
    tag: 'Most popular',
  },
  {
    icon: GraduationCap,
    title: 'Campus Recruitment',
    description:
      'End-to-end campus drives connecting fresh talent from 300+ institutions with employers building tomorrow’s workforce.',
    bullets: ['Panels & assessments', 'Bulk offers', 'Onboarding support'],
    tag: 'High volume',
  },
  {
    icon: Crown,
    title: 'CXO Search',
    description:
      'Confidential, board-grade search for leadership and C-suite mandates, handled by a dedicated partner-led desk.',
    bullets: ['Leadership mapping', 'Reference checks', 'Compensation advisory'],
    tag: 'Retained',
  },
  {
    icon: Store,
    title: 'Recruitment Franchise',
    description:
      'Own a Talent Corner franchise and operate a full-service recruitment desk in your city with our brand, database and training.',
    bullets: ['Brand licence', 'Database access', 'Training & support'],
    tag: 'Partner with us',
  },
];

export type Step = { n: string; icon: LucideIcon; title: string; description: string };
export const steps: Step[] = [
  {
    n: '01',
    icon: Search,
    title: 'Requirement Discussion',
    description:
      'We sit with your hiring managers to decode the role, the team culture, the must-have skills and the non-negotiables.',
  },
  {
    n: '02',
    icon: Users,
    title: 'Talent Search',
    description:
      'Our consultants mine our database, headhunt passive talent and run targeted outreach across the market.',
  },
  {
    n: '03',
    icon: ClipboardCheck,
    title: 'Candidate Evaluation',
    description:
      'Structured interviews, competency mapping, reference checks and a written assessment report for every shortlist.',
  },
  {
    n: '04',
    icon: Building2,
    title: 'Successful Placement',
    description:
      'Offer negotiation, onboarding handholding and a 90-day replacement guarantee to protect your investment.',
  },
];

export const industries: string[] = [
  'IT & SaaS',
  'BFSI',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'FMCG',
  'Logistics',
  'Education',
  'Telecom',
  'Engineering',
  'Pharmaceutical',
  'Real Estate',
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      'Talent Corner filled 14 regional sales manager roles for us in a single quarter — across cities we had never hired in before. Their turnaround is unreal.',
    name: 'Ananya Mehra',
    role: 'VP — Human Capital',
    company: 'NorthBridge Consumer',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'We had a confidential CFO mandate. The CXO desk delivered a shortlist of three exceptional candidates within ten days. We hired the first one.',
    name: 'Rajat Khanna',
    role: 'Managing Director',
    company: 'Veridian Industrial Group',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Their franchise in Indore understands the local market like no one else. It feels less like a vendor and more like an extension of our team.',
    name: 'Priya Nair',
    role: 'Talent Acquisition Lead',
    company: 'Lumen Health Systems',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export type Job = {
  title: string;
  location: string;
  experience: string;
  type: string;
  department: string;
  posted: string;
  status: 'Open' | 'Urgent' | 'New';
};
export const jobs: Job[] = [
  {
    title: 'Regional Sales Manager',
    location: 'Mumbai, Pune, Ahmedabad',
    experience: '6–9 yrs',
    type: 'Permanent',
    department: 'Sales & Distribution',
    posted: '2 days ago',
    status: 'Urgent',
  },
  {
    title: 'Senior Backend Engineer',
    location: 'Bengaluru (Hybrid)',
    experience: '5–8 yrs',
    type: 'Permanent',
    department: 'Engineering',
    posted: '5 days ago',
    status: 'New',
  },
  {
    title: 'Branch Operations Manager',
    location: 'Indore, Bhopal',
    experience: '7–10 yrs',
    type: 'Permanent',
    department: 'Operations',
    posted: '1 week ago',
    status: 'Open',
  },
  {
    title: 'Head of Risk — BFSI',
    location: 'Mumbai',
    experience: '12–18 yrs',
    type: 'CXO Search',
    department: 'Leadership',
    posted: '1 week ago',
    status: 'Open',
  },
  {
    title: 'Plant Maintenance Lead',
    location: 'Pune',
    experience: '8–12 yrs',
    type: 'Permanent',
    department: 'Manufacturing',
    posted: '2 weeks ago',
    status: 'Open',
  },
  {
    title: 'Product Marketing Manager',
    location: 'Gurugram',
    experience: '4–7 yrs',
    type: 'Permanent',
    department: 'Marketing',
    posted: '2 weeks ago',
    status: 'Open',
  },
];

export const trustBadges = [
  { icon: ShieldCheck, label: 'ISO 9001:2015 Certified' },
  { icon: Building2, label: '28+ Offices Pan-India' },
  { icon: Users, label: '2.5L+ Placements' },
];
