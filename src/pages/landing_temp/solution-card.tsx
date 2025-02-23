import React from "react";

type SolutionCardProps = {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  isHighlighted?: boolean;
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  number,
  title,
  description,
  iconSrc,
  isHighlighted = false,
}) => {
  const baseClasses =
    "flex flex-col px-6 py-6 mx-auto w-full rounded-[32px] max-md:pl-5 max-md:mt-8";
  const highlightedClasses = isHighlighted
    ? "text-white bg-indigo-600"
    : "bg-white border border-gray-200 border-solid";

  return (
    <div className={`${baseClasses} ${highlightedClasses}`}>
      <div className="flex gap-10 justify-between items-start w-full text-xl font-medium leading-tight whitespace-nowrap">
        <div
          className={`gap-2.5 self-stretch py-2.5 rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-zinc-400"
          }`}
        >
          {number}
        </div>
        <img
          loading="lazy"
          src={iconSrc}
          alt={`Icon for ${title}`}
          className="object-contain shrink-0 w-16 aspect-square rounded-[50px]"
        />
      </div>
      <div className="flex flex-col mt-6">
        <h3
          className={`text-3xl font-semibold tracking-tight leading-none rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 text-base font-medium leading-6 rotate-[3.857333016046129e-17rad] ${
            isHighlighted ? "text-white" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
