import CustomButton from "@/components/atoms/button";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-10 items-center px-20 py-24 mt-32 w-full bg-slate-950  rounded-[42px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto font-semibold text-white basis-0 w-full sm:w-[50%]">
        <h2 className="text-8xl tracking-tighter leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Let's Learn
          <br className="sm:block hidden" />
          <span className="sm:ml-0 ml-2">together.</span>
        </h2>
        <p className="mt-11 text-xl tracking-normal leading-none max-md:mt-10 max-md:max-w-full">
          Achieve your academic goals with expertly crafted resources
        </p>
      </div>
      <div className="flex flex-col items-start self-stretch my-auto  w-full sm:w-[50%]">
        <div className="flex flex-col  ">
          <p className="text-2xl font-medium tracking-tight leading-7 text-white">
            We have helped a whole lot students study and prepare for exams
          </p>
          <div className="flex md:flex-row flex-col gap-10 items-center mt-6 w-full">
            <div className="flex flex-col self-stretch my-auto">
              <div className="flex gap-2 items-center">
                <div className="self-stretch my-auto text-lg font-medium tracking-normal leading-none text-white">
                  4.8
                </div>
                <div className="flex gap-0.5 items-start self-stretch my-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="flex shrink-0 w-6 h-6">
                      {/* Replace with actual star icon */}⭐
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2.5 text-lg font-medium tracking-normal leading-none text-white">
                (1.5k Positive review)
              </div>
            </div>
            <div className="flex gap-0 items-center self-stretch p-1.5 my-auto text-sm font-extrabold leading-tight text-center whitespace-nowrap bg-white rounded-[29px] text-neutral-900 w-fit">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/79c21446717546d3c8d16574bf16798d374e1b84fc7fc281dc94423b14c2edd1?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="User avatar"
                className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.03] w-[39px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/ea05ca98b50a7a5387e4a63dd02ecf472ee5f85f4a5dce89f02f00d33677f02c?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="User avatar"
                className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/7ca988edcaf2624629259906999e8f92136802350ae138a8f00a86594484d8df?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="User avatar"
                className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/a4b2b6bb2abc6a8a77072dee84617ae34108dd3347884a2d90da491513c51100?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="User avatar"
                className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[38px]"
              />
              <div className="self-stretch px-2 my-auto rounded-2xl bg-zinc-100 h-[39px] min-h-[38px] w-[39px] flex items-center justify-center">
                +23
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
        <CustomButton title={"Create an iSabiBook Account"} variant={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
