import React from 'react';

export const LeagueHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 h-[46px] min-w-[240px] max-md:max-w-full">
        <h2 className="text-2xl font-bold tracking-wide leading-none text-black max-md:max-w-full">
          IsabiBook league
        </h2>
        <p className="mt-3 text-lg font-medium leading-none text-gray-400 max-md:max-w-full">
          Lessons curated specially for you
        </p>
      </div>
      <button className="self-stretch my-auto text-sm font-bold tracking-wider leading-none text-[#481B0D] uppercase">
        view leaderboards
      </button>
    </div>
  );
};