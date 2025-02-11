import React from 'react'
import RootLayout from '../layout'
import Header from '@/components/module/header'
import Features from '@/pages/landing/Features'
import CreativeSolution from '@/pages/landing/CreativeSolution'
import LearningSolutions from '@/pages/landing/LearningSolutions'
import Solutions from '@/pages/landing/Solutions'
import FAQ from '@/pages/landing/FAQ'
import CallToAction from '@/pages/landing/CallToAction'
import Newsletter from '@/pages/landing/Newsletter'
import Footer from '@/pages/landing/Footer'
import Hero from '@/pages/landing/Hero'
import EducationalPackages from './eduationalpackage'

const LandingPage = () => {
  return (
   <RootLayout>
     <div className=''>
      <Header />
      {/* <Hero /> */}
      <main>
        <Hero />
        <Features />
        <CreativeSolution />
        <LearningSolutions />
        <Solutions />
        <EducationalPackages />
        <FAQ />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer />
     </div>
   </RootLayout>
  )
}

export default LandingPage