import React, { useState } from 'react';

import stationary from "@/assets/stationary.png"
import saly from "@/assets/saly28.png"
import Navigation from './navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import TopHeader from './topheader';

const Header: React.FC = () => {

    const isRegister = useSelector((state: RootState) => state.navigation.openCourse);
  return (
    <div className="xl:px-32 md:px-16 px-5 flex flex-col items-start  w-full max-md:max-w-full">
      <TopHeader />
      <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-black xl:pr-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start mt-6 max-md:max-w-full">
          <h1 className="text-5xl font-semibold tracking-tighter max-md:max-w-full max-md:text-4xl">
            Good Morning, Clara!
          </h1>
          <p className="text-2xl max-md:max-w-full">
            Let's get you started
          </p>
        </div>
        <img
          loading="lazy"
          src={isRegister ? stationary : saly}
          className="object-contain shrink-0 max-w-full aspect-[1.2] w-[212px] sm:block hidden"
          alt="Decorative illustration"
        />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;