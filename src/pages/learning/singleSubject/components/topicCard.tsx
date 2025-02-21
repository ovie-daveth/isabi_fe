import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/context/store';
import { setOpenCourse, setSubject } from '@/context/slices/navigation-slice';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '../../subjects/components/progress';

interface SubjectCardProps {
  description: string;
  imageSrc: string;
  position: number
  progress: number
}

export const TopicCard: React.FC<SubjectCardProps> = ({ description, imageSrc, position, progress }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();

  const handleNavigation = (name: string) => {
    dispatch(setOpenCourse(true))
    dispatch(setSubject(name))
    navigate(`/study-package/${name}`)
  }
  return (
    <div onClick={() => handleNavigation(description)} className={`flex overflow-hidden relative flex-col flex-1 shrink gap-2.5 items-start cursor-pointer self-stretch p-6 my-auto rounded-3xl xl:aspect-[3.007] basis-0 max-md:px-5 ${position === 1 ? "bg-[#004fc525]" : position === 2 ? "bg-[#cc872636]" : "bg-[#8823232f]"}	`}>
      <div className="flex items-start justify-between  z-50 w-full mt-10">
        <div className="flex relative flex-col flex-1 shrink basis-0 text-white">
          <div className="text-2xl font-bold leading-loose">
          <img
                loading="lazy"
                src={imageSrc}
                alt={`${description} subject background`}
                className="w-16"

            />
          </div>
        <div className={`mt-1.5 text-lg font-semibold tracking-widest ${position === 1 ? "text-[#004FC5] w-[40%]" : position === 2 ? "text-[#CC8726] w-[50%]" : "text-[#882323]  w-[40%]"}`}>{description}</div>
        </div>
        <div className=' absolute bottom-5 right-10'>
        <CircularProgress progress={progress} />
        </div>
      </div>
    </div>
  );
};