import React, { useState } from 'react';
import first from "@/assets/first.png"
import two from "@/assets/second.png"
import third from "@/assets/third.png"
import { cn } from '@/lib/utils';

interface LeagueCardProps {
  name: string;
  xp: number;
  imageSrc: string;
  position: number;
  rank?: number;
  isCurrentUser?: boolean;
}

export const LeagueCard: React.FC<LeagueCardProps> = ({ name, xp, imageSrc, position, rank, isCurrentUser }) => {
  
  const [selected, setSelected] = useState(1)
  const isTopThree = position <= 3;
  const cardClass = `${selected === position ? "bg-primary text-white":"bg-white"} flex flex-col flex-1 shrink justify-center p-4 rounded-3xl border border-solid basis-0 border-stone-300 min-w-[240px]`;

  const medalSrc = position === 1 ? first : position === 2 ? two : third;

  const handleSelect = (id: number) => {
    setSelected(id)
  }

  return (
    <div onClick={() => handleSelect(position)} className={cardClass}>
      <div className="flex gap-4 items-center w-full">
        <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto basis-0">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${name}'s profile`}
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-xl aspect-square"
          />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div className={isCurrentUser ? "font-semibold tracking-normal leading-none" : ""}>
              {name} {isCurrentUser && <span className="text-orange-600">(Me)</span>}
            </div>
            <div className="flex gap-1 items-center mt-2 w-full">
              <img
                loading="lazy"
                src={isTopThree ? "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/a66e04f90cd6a96b87993de85a9f7e19d59cb9e9fa42b96ebd88db1e2d00e7a0?apiKey=e925627fa4404be68784e8320bcd6258&" : "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0fe3015e955e099c4c240bc43948cbb757cd64bb494cfca7516043aaefbf223a?apiKey=e925627fa4404be68784e8320bcd6258&"}
                alt="XP icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                {xp} XP
              </div>
              {rank && (
                <div className="flex-1 shrink self-stretch my-auto leading-6 text-right basis-0">
                  {rank}th
                </div>
              )}
            </div>
          </div>
        </div>
        {isTopThree && (
          <img
            loading="lazy"
            src={medalSrc}
            alt={`${position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze'} medal`}
            className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
          />
        )}
      </div>
    </div>
  );
};