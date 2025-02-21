import React, { Suspense, lazy } from 'react';
import RootLayout from '../layout';
import Header from '@/components/module/header';

// Lazy-loaded components
const Hero = lazy(() => import('@/pages/landing/Hero'));
const Features = lazy(() => import('@/pages/landing/Features'));
const CreativeSolution = lazy(() => import('@/pages/landing/CreativeSolution'));
const LearningSolutions = lazy(() => import('@/pages/landing/LearningSolutions'));
const Solutions = lazy(() => import('@/pages/landing/Solutions'));
const EducationalPackages = lazy(() => import('./eduationalpackage'));
const FAQ = lazy(() => import('@/pages/landing/FAQ'));
const CallToAction = lazy(() => import('@/pages/landing/CallToAction'));
const Newsletter = lazy(() => import('@/pages/landing/Newsletter'));
const Footer = lazy(() => import('@/pages/landing/Footer'));

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
