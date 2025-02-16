import React from 'react';

interface Feature {
  text: string;
  iconSrc: string;
}

interface PackageProps {
  package: {
    title: string;
    description: string;
    price?: string;
    isComingSoon?: boolean;
    features: string[];
  };
}

const PackageCard: React.FC<PackageProps> = ({ package: pkg }) => {
  const features: Feature[] = pkg.features.map((text, index) => ({
    text,
    iconSrc: `http://b.io/ext_${7 + index}-`
  }));

  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-2 pb-10 w-full border border-gray-200 border-solid bg-neutral-50 rounded-[34px] max-md:mt-10">
        <div className="flex flex-col items-start px-7 py-8 w-full bg-white rounded-[30px] max-md:px-5">
          <div className="flex gap-5 justify-between items-center px-1 py-1.5 max-w-full text-xs font-medium tracking-tight leading-none text-center text-black whitespace-nowrap border border-gray-200 border-solid bg-neutral-100 rounded-[37px] w-[199px]">
            <div className="gap-2 self-stretch px-4 py-3 bg-white min-h-[34px] rounded-[37px] shadow-[0px_1px_4px_rgba(0,0,0,0.09)]">
              Personal
            </div>
            <div className="self-stretch my-auto">Duo</div>
            <div className="self-stretch my-auto">Group</div>
          </div>
          <div className="mt-7 text-2xl font-semibold tracking-tighter leading-none text-black">
            {pkg.title}
          </div>
          <div className="mt-5 text-sm font-medium tracking-tight leading-snug text-black">
            {pkg.description}
          </div>
          <div className="flex gap-5 justify-between self-stretch mt-7 w-full">
            {pkg.isComingSoon ? (
              <>
                <div className="flex overflow-hidden gap-3 justify-center items-center py-0.5 pr-0.5 pl-7 bg-stone-300 min-h-[43px] rounded-[75px] max-md:pl-5">
                  <div className="self-stretch my-auto text-sm font-semibold tracking-tight leading-none text-center text-black">
                    Get Started
                  </div>
                  <div className="flex flex-col self-stretch my-auto w-[39px]">
                    <div className="flex shrink-0 bg-white rounded-full h-[39px] w-[39px]" />
                  </div>
                </div>
                <div className="my-auto text-xs font-semibold tracking-tight leading-none text-right text-black">
                  Coming soon
                </div>
              </>
            ) : (
              <>
                <button className="overflow-hidden gap-3 self-stretch py-4 pr-0.5 pl-7 text-sm font-semibold tracking-tight leading-none text-center text-black bg-indigo-600 min-h-[43px] rounded-[75px] max-md:pl-5">
                  Get Started
                </button>
                <div className="flex gap-px items-end my-auto text-black whitespace-nowrap">
                  <div className="text-xl font-semibold tracking-tighter leading-none text-right">
                    {pkg.price}
                  </div>
                  <div className="text-xs font-medium tracking-tight leading-none">
                    /month
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col self-center mt-12 w-80 max-w-full font-semibold leading-none text-black max-md:mt-10">
          <div className="text-lg tracking-tighter">
            Everything in the Standard Plan, plus:
          </div>
          <div className="flex flex-col items-start mt-5 w-full max-w-xs text-sm tracking-tight">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 self-stretch mt-2.5 w-full">
                <img
                  loading="lazy"
                  src={feature.iconSrc}
                  className="object-contain shrink-0 self-start aspect-square w-[15px]"
                  alt=""
                />
                <div className="flex-auto">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;