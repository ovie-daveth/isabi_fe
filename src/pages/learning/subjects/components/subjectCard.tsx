import React from 'react';
import CircularProgress from './progress';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/context/store';
import { setOpenCourse, setSubject } from '@/context/slices/navigation-slice';
import { useNavigate } from 'react-router-dom';

interface SubjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ title, description, imageSrc }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();

  const handleNavigation = (name: string) => {
    dispatch(setOpenCourse(true))
    dispatch(setSubject(name))
    navigate(`/study-package/${name}`)
  }
  return (
    <div onClick={() => handleNavigation(title)} className="flex overflow-hidden relative flex-col flex-1 shrink gap-2.5 items-start cursor-pointer self-stretch p-6 my-auto rounded-3xl xl:aspect-[3.007] basis-0 min-w-[240px] max-md:px-5">
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