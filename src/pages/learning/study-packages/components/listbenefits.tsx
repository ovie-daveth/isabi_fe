import React from 'react'
import CustomButton from '@/components/atoms/button'
import FeatureList from '@/pages/landing/featuredlist'
import { StudyPackage } from '../../interface'


const ListBenfits = ({pkg, type}: {pkg: StudyPackage, type: number}) => {

    const handleGetStarted = (title: string) => {

    }
  return (
    <div className="flex flex-col  pb-16 mx-auto w-full max-md:mt-6 max-md:max-w-full bg-zinc-50 rounded-b-[46px]">
              <div className="px-10 pb-11 w-full max-md:px-5 max-md:max-w-full bg-white rounded-b-[46px]">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
                    <div className="flex flex-col w-full font-medium leading-none text-neutral-900 ">
                      <div className="self-start  lg:text-4xl text-2xl font-semibold tracking-tighter">
                        {pkg.title}
                      </div>
                      <div className="lg:mt-6 mt-3 text-lg tracking-tight leading-snug">
                        {pkg.group[type].description}
                      </div>
                      <div className='flex items-center justify-between w-full lg:mt-16 mt-10'>
                        <div className="w-[50%] ">
                            <CustomButton fn={() => handleGetStarted(pkg.title)} title={"Get Started"} variant={pkg.isComingSoon ? "locked" : "primary"} />
                        </div>
                        {
                            pkg.isComingSoon ? <h1 className='text-[#2A29FF] font-medium md:text-lg text-sm'>Coming soon</h1> :  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full ">
                            <div className="flex gap-0.5 self-stretch my-auto whitespace-nowrap text-neutral-900 max-md:mt-10 sm:mr-0 mr-10">
                              <div className="grow lg:text-3xl font-semibold tracking-tighter leading-none text-right">
                              {pkg.group[type].price}
                              </div>
                              <div className="self-start lg:mt-4 lg:text-lg ml-1 font-medium tracking-tight leading-none">
                                /month
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-10'>
              <FeatureList features={pkg.group[type].features} title={pkg.group[type].name}  />
              </div>
            </div>
  )
}

export default ListBenfits
