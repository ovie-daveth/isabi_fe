import React from 'react';
import money from "@/assets/money1.png"

const CardHeader: React.FC = () => {
  return (
    <div className="flex gap-3 items-center self-start text-base font-medium leading-snug text-zinc-600">
    <img
      loading="lazy"
      src={money}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[50px] w-[42px]"
    />
    <div className="self-stretch my-auto">
      On demand 🤝 live support
    </div>
  </div>
  );
};

export default CardHeader;