import React from 'react';
import CardHeader from './card-header';
import PackageCard from './package-card';

const EducationalPackages: React.FC = () => {
  return (
    <div className="flex flex-col rounded-none mt-20">
      <div className="max-md:mr-2.5 max-md:max-w-full">
      <CardHeader />
      <div className="flex gap-5 max-md:flex-col justify-between">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="mt-6 text-7xl font-semibold tracking-wide text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-10 w-[70%]">
              Our educational packages
            </h1>
          </div>
        </div>
        <div className="flex flex-col ml-5  max-md:ml-0 w-[45%] items-start justify-start ">
          <p className="mt-24 text-lg font-medium leading-6 text-zinc-600  max-md:max-w-full">
            We strive to develop real-world web solutions that are ideal for
            small to large projects with bespoke project requirements web
            solutions that are ideal.
          </p>
        </div>
      </div>
    </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col justify-between">
          <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/7cd485d8f999d402f4eccd9ee43843b35d1f6bb906c0cd4def9c1ecc5a7d7526?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="Educational package illustration"
                className="object-contain w-full aspect-[1.49] rounded-[46px] max-md:max-w-full"
              />
              <div className="px-16 py-8 mt-7 bg-indigo-600 rounded-[46px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                    <div className="text-8xl font-semibold tracking-tighter leading-none text-white max-md:mt-10 max-md:text-4xl">
                      4
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto font-semibold text-white max-md:mt-10">
                      <div className="text-2xl tracking-tight leading-tight">
                        Simple steps to start using iSabiBook
                      </div>
                      <div className="mt-2.5 text-sm tracking-wide leading-5 font-light">
                        <span className="text-white">A proven workflow</span>{" "}
                        that ensures seamless collaboration and{" "}
                        <span className="text-white">outstanding results</span>.{" "}
                        <span className="text-white">A proven workflow</span>{" "}
                        that ensures seamless collaboration and{" "}
                        <span className="text-white">outstanding results</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <PackageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalPackages;