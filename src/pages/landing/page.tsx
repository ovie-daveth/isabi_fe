import React from 'react'
import RootLayout from '../layout'
import Header from '@/components/module/header'
import Features from '@/iSabiBook/Features'
import CreativeSolution from '@/iSabiBook/CreativeSolution'
import LearningSolutions from '@/iSabiBook/LearningSolutions'
import Solutions from '@/iSabiBook/Solutions'
import FAQ from '@/iSabiBook/FAQ'
import CallToAction from '@/iSabiBook/CallToAction'
import Newsletter from '@/iSabiBook/Newsletter'
import Footer from '@/iSabiBook/Footer'
import Hero from '@/iSabiBook/Hero'

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