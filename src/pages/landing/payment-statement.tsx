import React from 'react'
import FeatureList from './featuredlist'
import CustomButton from '@/components/atoms/button'

const PaymentStatement = ({title}: {title: string}) => {

    const handleGetStarted = (title: string) => {

    }
  return (
    <div className="flex flex-col px-2.5 pt-2.5 pb-16 mx-auto w-full border border-gray-200 border-solid bg-neutral-100 rounded-[46px] max-md:mt-6 max-md:max-w-full">
              <div className="px-10 py-11 w-full bg-white rounded-[40px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full font-medium leading-none text-neutral-900 max-md:mt-10">
                      <div className="self-start mt-10 text-4xl font-semibold tracking-tighter">
                        {title}
                      </div>
                      <div className="mt-6 text-lg tracking-tight leading-snug">
                        {title === "Standard" ? "Standard projects or Standard portfolios" : title === "Pro" ? "PRO projects or PRO portfolios" : "Premium projects or Premium portfolios"}
                      </div>
                      <div className="mt-16 w-[70%]">
                        <CustomButton fn={() => handleGetStarted(title)} title={"Get Started"} variant={"primary"} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-0.5 self-stretch my-auto whitespace-nowrap text-neutral-900 max-md:mt-10">
                      <div className="grow text-3xl font-semibold tracking-tighter leading-none text-right">
                      {title === "Standard" ? "₦4,000" : title === "Pro" ? "₦5,000" : "₦8,000"}
                      </div>
                      <div className="self-start mt-4 text-lg font-medium tracking-tight leading-none">
                        /month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FeatureList title={title} />
            </div>
  )
}

export default PaymentStatement
