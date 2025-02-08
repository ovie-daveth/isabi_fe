import React from "react";

const LearningSolutions: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:px-16 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-3 items-center self-start ml-4 text-base font-medium leading-snug text-zinc-600 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0a99377f72e6f2418f38594201e9fd23523665cb0370024ecc93a083f6172cdf?apiKey=e925627fa4404be68784e8320bcd6258&"
          alt="On demand live support icon"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[50px] w-[42px]"
        />
        <div className="self-stretch my-auto">On demand 🤝 live support</div>
      </div>
      <div className="mt-11 w-full max-w-[1290px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col lg:flex-row gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <h2 className="lg:text-7xl text-4xl font-semibold tracking-tighter lg:leading-[72px] text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Learning solutions with practical experience.
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <p className="mt-11 text-lg font-medium leading-6 text-zinc-600 max-md:mt-10">
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke project requirements web
              solutions that are ideal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSolutions;
