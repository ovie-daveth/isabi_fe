import React from "react";

type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  isHighlighted?: boolean;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  iconSrc,
  isHighlighted = false,
}) => {
  const baseClasses =
    "flex flex-col flex-1 shrink self-stretch p-8 my-auto basis-0 min-w-[240px] rounded-[42px]";
  const highlightedClasses = isHighlighted
    ? "text-white bg-indigo-600"
    : "bg-white border border-gray-200 border-solid text-neutral-900";

  return (
    <div className={`${baseClasses} ${highlightedClasses} max-md:px-5`}>
      <div className="flex flex-col">
        <div
          className={`text-3xl font-semibold tracking-tight leading-none rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </div>
        <div
          className={`mt-4 text-base font-medium leading-6 rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-zinc-600"
          }`}
        >
          {description}
        </div>
      </div>
      <div className="flex gap-10 justify-between items-end mt-8 text-5xl font-bold tracking-tighter leading-none whitespace-nowrap min-h-[64px]">
        <img
          loading="lazy"
          src={iconSrc}
          alt={`Icon for ${title}`}
          className="object-contain shrink-0 w-16 aspect-square rounded-[50px]"
        />
        <div
          className={`rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-neutral-300"
          }`}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
