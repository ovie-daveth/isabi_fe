import { Suspense, lazy } from 'react';
import RootLayout from '../layout';
import Header from '@/components/module/header';

// Lazy-loaded components
const Hero = lazy(() => import('@/pages/landing/hero'));
const Features = lazy(() => import('@/pages/landing/features'));
const CreativeSolution = lazy(() => import('@/pages/landing/creative-solution'));
const LearningSolutions = lazy(() => import('@/pages/landing/learning-solutions'));
const Solutions = lazy(() => import('@/pages/landing/solutions'));
const EducationalPackages = lazy(() => import('./eduationalpackage'));
const FAQ = lazy(() => import('@/pages/landing/faq'));
const CallToAction = lazy(() => import('@/pages/landing/call-to-action'));
const Newsletter = lazy(() => import('@/pages/landing/newsletter'));
const Footer = lazy(() => import('@/pages/landing/footer'));

const LandingPage = () => {
  return (
    <RootLayout>
      <div className="">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <Features />
            <CreativeSolution />
            <LearningSolutions />
            <Solutions />
            <EducationalPackages />
            <FAQ />
            <CallToAction />
            <Newsletter />
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </RootLayout>
  );
};

export default LandingPage;
