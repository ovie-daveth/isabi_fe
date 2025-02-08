import CustomButton from "@/components/atoms/button";
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col items-start mt-11 mr-0 w-full font-medium text-zinc-600 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-3 items-center text-base leading-snug">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0a99377f72e6f2418f38594201e9fd23523665cb0370024ecc93a083f6172cdf?apiKey=e925627fa4404be68784e8320bcd6258&"
              alt="On demand live support icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[50px] w-[42px]"
            />
            <div className="self-stretch my-auto">
              On demand 🤝 live support
            </div>
          </div>
          <h1 className="self-stretch mt-8 lg:text-8xl text-5xl font-bold tracking-tighter lg:leading-[94px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            An e-learning platform suited just for you
          </h1>
          <p className="mt-11 text-lg leading-6 lg:w-[547px] max-md:mt-10 max-md:max-w-full">
            Achieve your academic and professional goals with expertly crafted
            resources and personalized learning paths. Sign up now
          </p>
          <div className='flex items-center gap-10 lg:w-[60%] mt-10'>
                    <CustomButton title="Create an iSabiBook account" variant='primary' />
                    <CustomButton isIcon title="Explore platform" variant='secondary' />
                </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full lg:mt-0 mt-20 lg:mb-0 sm:-mb-[40rem] -mb-[28rem]">
        <div className="flex relative flex-col grow items-end px-20 pt-10 pb-20 min-h-[697px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/79414c77cf8c833a9cf360c4c758fcd45dd1fccafa227426902d9d1e490c8086?apiKey=e925627fa4404be68784e8320bcd6258&"
            alt="Background image for hero section"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/e20052bbcbadd1c78050b51aa4da55c90e4b89c2add721ca5bb71ea82b408294?apiKey=e925627fa4404be68784e8320bcd6258&"
            alt="Featured content for hero section"
            className="object-contain max-w-full rounded-none aspect-[1.05] w-[608px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
