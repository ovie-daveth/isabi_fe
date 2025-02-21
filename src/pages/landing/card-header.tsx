import React from 'react';

const CardHeader: React.FC = () => {
  return (
    <div className="flex gap-3 items-center self-start text-base font-medium leading-snug text-zinc-600">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0a99377f72e6f2418f38594201e9fd23523665cb0370024ecc93a083f6172cdf?apiKey=e925627fa4404be68784e8320bcd6258&"
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