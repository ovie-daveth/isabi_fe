import React from 'react';
import CircularProgress from './progress';

interface SubjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex overflow-hidden relative flex-col flex-1 shrink gap-2.5 items-start self-stretch p-6 my-auto rounded-3xl xl:aspect-[3.007] basis-0 min-w-[240px] max-md:px-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} subject background`}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex items-start justify-between  z-50 w-full">
        <div className="flex relative flex-col flex-1 shrink basis-0 text-white">
          <div className="text-2xl font-bold leading-loose">{title}</div>
          <div className="mt-1.5 text-lg font-semibold leading-7 w-[70%]">{description}</div>
        </div>
        <CircularProgress progress={0} />
      </div>
    </div>
  );
};