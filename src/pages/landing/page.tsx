import React from 'react'
import RootLayout from '../layout'
import Header from '@/components/module/header'
import Hero from './hero'

const LandingPage = () => {
  return (
   <RootLayout>
     <div className=''>
      <Header />
      <Hero />
     </div>
   </RootLayout>
  )
}

export default LandingPage