import React from 'react';
import FeatureList from './featuredlist';

const PackageCard: React.FC = () => {
  return (
    <div className="flex flex-col px-2.5 pt-2.5 pb-16 mx-auto w-full border border-gray-200 border-solid bg-neutral-100 rounded-[46px] max-md:mt-6 max-md:max-w-full">
      <div className="px-10 py-11 w-full bg-white rounded-[40px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full font-medium leading-none text-neutral-900 max-md:mt-10">
              <div className="flex flex-col justify-center py-1 pr-6 pl-1 text-sm tracking-tight text-center whitespace-nowrap border border-gray-200 border-solid bg-neutral-100 min-h-[54px] rounded-[50px] max-md:pr-5">
                <div className="flex gap-7 items-center">
                  <div className="gap-2.5 self-stretch px-5 py-4 my-auto bg-white min-h-[46px] rounded-[50px] shadow-[0px_1px_6px_rgba(0,0,0,0.09)]">
                    Standard
                  </div>
                  <div className="self-stretch my-auto">Pro</div>
                  <div className="self-stretch my-auto">Premium</div>
                </div>
              </div>
              <div className="self-start mt-10 text-4xl font-semibold tracking-tighter">
                Standard
              </div>
              <div className="mt-6 text-lg tracking-tight leading-snug">
                Small projects or personal portfolios
              </div>
              <button className="gap-4 self-start py-5 pr-1 pl-7 mt-10 text-lg font-semibold tracking-tighter text-center text-white bg-indigo-600 min-h-[58px] rounded-[100px] max-md:pl-5">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-0.5 self-stretch my-auto whitespace-nowrap text-neutral-900 max-md:mt-10">
              <div className="grow text-3xl font-semibold tracking-tighter leading-none text-right">
                ₦4,000
              </div>
              <div className="self-start mt-4 text-lg font-medium tracking-tight leading-none">
                /month
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureList />
    </div>
  );
};

export default PackageCard;