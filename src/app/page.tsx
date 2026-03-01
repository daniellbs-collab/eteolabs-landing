import dynamic from 'next/dynamic';
import { Hero } from '@/sections/Hero';
import { SceneBlock } from '@/components/layout/SceneBlock';
import { SceneProgress } from '@/components/layout/SceneProgress';

const SocialProof = dynamic(() => import('@/sections/SocialProof').then((mod) => mod.SocialProof));
const ProductsShowcase = dynamic(() => import('@/sections/ProductsShowcase').then((mod) => mod.ProductsShowcase));
const PainSolution = dynamic(() => import('@/sections/PainSolution').then((mod) => mod.PainSolution));
const Features = dynamic(() => import('@/sections/Features').then((mod) => mod.Features));
const ProductDemo = dynamic(() => import('@/sections/ProductDemo').then((mod) => mod.ProductDemo));
const Testimonials = dynamic(() => import('@/sections/Testimonials').then((mod) => mod.Testimonials));
const Pricing = dynamic(() => import('@/sections/Pricing').then((mod) => mod.Pricing));
const FAQ = dynamic(() => import('@/sections/FAQ').then((mod) => mod.FAQ));
const Contact = dynamic(() => import('@/sections/Contact').then((mod) => mod.Contact));

export default function Home() {
  return (
    <div className="relative">
      <SceneProgress />
      <SceneBlock intensity={14}>
        <Hero />
      </SceneBlock>
      <SceneBlock intensity={16}>
        <SocialProof />
      </SceneBlock>
      <SceneBlock intensity={20}>
        <ProductsShowcase />
      </SceneBlock>
      <SceneBlock intensity={22}>
        <PainSolution />
      </SceneBlock>
      <SceneBlock intensity={26}>
        <Features />
      </SceneBlock>
      <SceneBlock intensity={28}>
        <ProductDemo />
      </SceneBlock>
      <SceneBlock intensity={24}>
        <Testimonials />
      </SceneBlock>
      <SceneBlock intensity={22}>
        <Pricing />
      </SceneBlock>
      <SceneBlock intensity={18}>
        <FAQ />
      </SceneBlock>
      <SceneBlock intensity={12}>
        <Contact />
      </SceneBlock>
    </div>
  );
}
