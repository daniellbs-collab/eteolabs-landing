import { Contact } from '@/sections/Contact';
import { FAQ } from '@/sections/FAQ';
import { Features } from '@/sections/Features';
import { Hero } from '@/sections/Hero';
import { PainSolution } from '@/sections/PainSolution';
import { Pricing } from '@/sections/Pricing';
import { ProductDemo } from '@/sections/ProductDemo';
import { SocialProof } from '@/sections/SocialProof';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <SocialProof />
      <PainSolution />
      <Features />
      <ProductDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}