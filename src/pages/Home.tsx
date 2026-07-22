import { Hero } from '../components/sections/Hero';
import { Statistics } from '../components/sections/Statistics';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Services } from '../components/sections/Services';
import { Industries } from '../components/sections/Industries';
import { Testimonials } from '../components/sections/Testimonials';
import { FeaturedOpportunities } from '../components/sections/FeaturedOpportunities';
import { FinalCTA } from '../components/sections/FinalCTA';
import Franchise from './Franchise';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <Services />
      {/* <Franchise />
      <Industries />
      <Testimonials />
      <FeaturedOpportunities /> */}
      <FinalCTA />
    </>
  );
}
