import CustomButton from '@/components/atoms/button';
import React from 'react'
import ball from "@/assets/blueball.png"
import frame from "@/assets/Subtract.png"
import { FaMoneyBills } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='mt-20 w-full'>
        <div className='flex items-start justify-between'>
            <div className='flex flex-col gap-5 w-1/2'>
                <div className='flex items-center gap-2 text-lg'>
                    <span className='bg-[#E6EFFD]'><FaMoneyBills color="#0066FF" /></span>
                    <p>On demand 🤝 live support</p>
                </div>
                <h1 className="text-7xl font-bold w-[65%]">An e-learning platform suited just for you</h1>
                <p className='text-lg font-light w-[60%]'>Achieve your academic and professional goals with expertly crafted resources and personalized learning paths. Sign up now</p>
                <div className='flex items-center gap-10 w-[60%] mt-10'>
                    <CustomButton title="Create an iSabiBook account" variant='primary' />
                    <CustomButton isIcon title="Explore platform" variant='secondary' />
                </div>

            </div>
            <div className='w-1/2 '>
                <div className='relative w-full'>
                    <img src={frame} className='w-[50%]' />
                    <div className='absolute right-0 top-0'>
                        <img src={ball} className='absolute right-0 top-0' />
                    </div>
                    <div className='bg-white shadow-lg absolute top-1/2 left-[20%]'>
                        <h1>4.6</h1>
                        <div>
                            starts
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <h1>GRID</h1>
    </div>
  )
}

export default Hero