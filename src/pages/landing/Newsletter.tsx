import CustomButton from "@/components/atoms/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
  };

  return (
    <div className="flex gap-5 justify-between items-start mt-16  max-md:mt-10 ">
      <div className="self-end mt-6 text-3xl font-semibold tracking-tighter leading-10 text-black w-[45%]">
        Learn better with iSabiBok, an e-learning platform suited just for you
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex overflow-hidden relative items-start self-start p-1.5 text-base rounded-3xl max-md:max-w-full z-50"
      >
        <div className="flex flex-col flex-1 shrink justify-center my-auto w-full basis-0 min-w-[240px] max-md:max-w-full z-50">
          <div className="flex flex-1 justify-center items-center size-full max-md:max-w-full">
            <div className="flex flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full z-50">
              <label htmlFor="emailInput" className="sr-only">
                Enter your email
              </label>
              <Input
                type="email"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@provider.com"
                className=" h-16 border-none text-black placeholder:text-black "
                required
                aria-label="Enter your email"
              />
              <CustomButton isIcon title={"Get 10% Discount"} variant={"primary"} />
            </div>
          </div>
        </div>
        <div className="flex absolute inset-0 z-0 shrink-0 self-start rounded-3xl border border-solid border-gray-500 border-opacity-10 h-[60px] min-w-[240px] w-[436px] max-md:max-w-full" />
      </form>
    </div>
  );
};

export default Newsletter;
