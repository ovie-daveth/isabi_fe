import React from 'react'
import FeatureList from './featuredlist'
import CustomButton from '@/components/atoms/button'

const PaymentStatement = ({title}: {title: string}) => {

    const handleGetStarted = (title: string) => {

    }

    const feature = [
      "Advanced animations",
      "CMS integration for blogs, portfolios, or dynamic content",
      "Up to 10 pages",
      "SEO-friendly structure",
      "Priority email support for faster communication"
    ];

    
  return (
    <div className="flex flex-col px-2.5 pt-2.5 pb-16 mx-auto w-full border border-gray-200 border-solid bg-neutral-100 rounded-[46px] max-md:mt-6 max-md:max-w-full">
              <div className="px-10 py-11 w-full bg-white rounded-[40px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full font-medium leading-none text-neutral-900 max-md:mt-10">
                      <div className="self-start mt-10 lg:text-4xl text-2xl font-semibold tracking-tighter">
                        {title}
                      </div>
                      <div className="mt-6 lg:text-lg tracking-tight leading-snug">
                        {title === "Standard" ? "Standard projects or Standard portfolios" : title === "Pro" ? "PRO projects or PRO portfolios" : "Premium projects or Premium portfolios"}
                      </div>
                      <div className="mt-16 xl:w-[75%] lg:block hidden">
                        <CustomButton fn={() => handleGetStarted(title)} title={"Get Started"} variant={"primary"} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-0.5 self-stretch my-auto whitespace-nowrap text-neutral-900 max-md:mt-10">
                      <div className="grow lg:text-3xl text-2xl font-semibold tracking-tighter leading-none text-right lg:mt-0 mt-24">
                      {title === "Standard" ? "₦4,000" : title === "Pro" ? "₦5,000" : "₦8,000"}
                      </div>
                      <div className="self-start lg:mt-4 mt-28 text-lg font-medium tracking-tight leading-none">
                        /month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 xl:w-[75%] lg:hidden block">
                        <CustomButton fn={() => handleGetStarted(title)} title={"Get Started"} variant={"primary"} />
                      </div>
              </div>
              <FeatureList title={title} features={feature} />
            </div>
  )
}

export default PaymentStatement
