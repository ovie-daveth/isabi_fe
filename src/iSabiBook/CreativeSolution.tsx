import CustomButton from "@/components/atoms/button";
import React from "react";
import { Link } from "react-router-dom";

const CreativeSolution: React.FC = () => {
  return (
    <div className="mt-28 -mb-6 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-2 w-full font-medium text-neutral-900 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 items-center self-start text-base leading-snug text-zinc-600">
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
            <h2 className="mt-6 lg:text-7xl text-4xl font-semibold tracking-tighter lg:leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Make the creative solution for learning
            </h2>
            <p className="mt-8 text-lg leading-6 max-md:max-w-full">
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke project requirements. web
              solutions that are ideal for small to large projects with bespoke
              project requirements.
            </p>
            <div className="mt-10 lg:mt-0 sm:w-[unset] w-[60%]">
            <CustomButton title="Create an iSabiBook account" variant='primary' />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0d56ec9be628b546dffad368ca1cc9e065196315d857187fe5efb03c8cf9dcd6?apiKey=e925627fa4404be68784e8320bcd6258&"
            alt="Creative learning solution illustration"
            className="object-contain grow w-full aspect-[1.34] rounded-[42px] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeSolution;
