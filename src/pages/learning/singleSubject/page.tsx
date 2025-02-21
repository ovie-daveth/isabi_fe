import { RootState } from "@/context/store";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import TopHeader from "../components/topheader";
import { SubjectCard } from "../subjects/components/subjectCard";
import { useNavigate } from "react-router-dom";
import { TopicCard } from "./components/topicCard";
import saly1 from "@/assets/saly20.png"
import saly2 from "@/assets/saly43.png"
import saly3 from "@/assets/saly28.png"

const subjects = [
  {
    description: "Combinatorics in Probability",
    imageSrc: saly1,
    progress: 25
  },
  {
    description: "Calculation and properties of determinants",
    imageSrc: saly2,
    progress: 45
  },
  {
    description: "Definition and basics of functions",
    imageSrc: saly3,
    progress: 75
  },
  
];

const SingleSubject = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  const activeSubject = useSelector(
    (state: RootState) => state.navigation.subject
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-10">
      <div className="flex overflow-hidden flex-col bg-white">
        <div className="flex flex-col items-start  w-full max-md:max-w-full">
          <div className="xl:px-32 md:px-16 px-5 w-full">
          <TopHeader />
          </div>
          <div className="mt-28 w-full">
            <div className="flex items-start gap-7 xl:px-32 md:px-16 px-5 ">
              <span
                onClick={goBack}
                className="bg-white shadow-sm flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem] border -mt-5 cursor-pointer"
              >
                <ArrowLeft color="#A1A1A1" />
              </span>
              <div className="flex flex-col gap-7">
                <h1 className="leading-[12px] font-bold text-5xl">
                  {activeSubject}
                </h1>
                <p className="text-lg text-accent font-medium">
                  Study and prepare for your exams
                </p>
              </div>
            </div>
            <div className="xl:px-32 md:px-16 px-5  bg-zinc-100 py-5 mt-10 w-full pt-16">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full tracking-wide max-md:max-w-full mb-5">
                      <h1 className="text-2xl font-bold leading-none text-black max-md:max-w-full">
                        Start your journey
                      </h1>
                      <h2 className="mt-3 text-lg font-medium leading-none text-gray-400 max-md:max-w-full">
                        Lessons curated specially for you
                      </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7 items-center mt-5 w-full text-black max-md:max-w-full">
                      {subjects.map((subject, index) => (
                        <TopicCard key={index} {...subject} position={index + 1} />
                      ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSubject;
