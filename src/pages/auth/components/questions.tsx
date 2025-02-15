import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import q1 from "@/assets/q1.png";
import { Button } from "@/components/ui/button";
import {
  desiredCourses,
  heardAboutPlatforms,
  studyGoals,
} from "@/constant/onboard";
import CustomButton from "@/components/atoms/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "./phone";
import { useAxios } from "@/config/useAxios";
import { AuthService } from "@/api/auth";
import { getUserId } from "@/lib/helpers";
import { toastProp } from "../interface/types";

const Questions = ({
    progress,
    setProgress,
    setOpenToast,
    setLoading,
    setMessage
}: {
    setProgress: Dispatch<SetStateAction<number>>,
    progress: number,
    setLoading:  Dispatch<SetStateAction<boolean>>,
    setOpenToast: Dispatch<SetStateAction<toastProp>>,
    setMessage: Dispatch<SetStateAction<string>>,
}) => {
  const [isActive, setIsActive] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    studyGoal: "",
    heardAboutPlatform: "",
    desiredCourse: "",
    phone: ""
  })

  const authService = new AuthService()

  const handleProgress = () => {
    // Check if the required field for the current step is selected
    if (
      (progress === 1 && !formData.studyGoal) ||
      (progress === 2 && !formData.desiredCourse) ||
      (progress === 3 && !formData.heardAboutPlatform) ||
      (progress === 4 && !formData.phone)
    ) {
      setOpenToast({
        isOpen: true,
        type: "error"
      }); 
      setMessage("Pick an item")
      return; // Stop the function from progressing
    }
  
    if (progress < 4) {
      setProgress((prev) => prev + 1);
    }
  
    if (progress === 4) {
      
    }
  };
  
  
  const handleBack = () => {
    if (progress > 1) {
      setProgress((prev) => prev - 1);
    }
  };

  const handleSelectAnswer = (id: number) => {
    setIsActive(id);
  
    if (progress === 1) {
      const selectedGoal = studyGoals.find((item) => item.id === id)?.studyGoal || "";
      setFormData((prev) => ({ ...prev, studyGoal: selectedGoal }));
    } else if (progress === 2) {
      const selectedCourse = desiredCourses.find((item) => item.id === id)?.desiredCourse || "";
      setFormData((prev) => ({ ...prev, desiredCourse: selectedCourse }));
    } else if (progress === 3) {
      const selectedPlatform = heardAboutPlatforms.find((item) => item.id === id)?.heardAboutPlatform || "";
      setFormData((prev) => ({ ...prev, heardAboutPlatform: selectedPlatform }));
    }
  };
  

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolling(true);
      clearTimeout((scrollRef.current as any).scrollTimeout);
      (scrollRef.current as any).scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const handleSubmit = async () => {    
    if(!formData.desiredCourse || !formData.heardAboutPlatform || !formData.phone || !formData.studyGoal){
        setLoading(false)
        setMessage("Some items was not selected")
        setOpenToast({
          isOpen: true,
          type: "error"
        })
        return
    }

    console.log("Updated Form Data:", formData);
    setLoading(true)
    try {
      
    const response = await authService.onBoardStudents(formData, getUserId())
    if(response){
        console.log(response)
        setLoading(false)
        setMessage(response?.message)
        setOpenToast({
            isOpen: true,
            type: "success"
        })
    }
    } catch (error) {
      setLoading(false)
      setMessage(error?.message)
      setOpenToast({
          isOpen: true,
          type: "error"
      })
    }
  }

  return (
    <div className="">
      <div
        ref={scrollRef}
        className={`flex flex-col gap-5 overflow-y-scroll custom-scrollbar px-4 max-h-[250px] scroll-smooth ${
          isScrolling ? "scrollbar-thin scrollbar-thumb-gray-500" : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
      >
        {progress === 2
          ? desiredCourses.map((item, idx) => (
              <Button
                key={idx}
                type="button"
                onClick={() => handleSelectAnswer(item.id)}
                variant="ghost"
                className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${
                  isActive === item.id && "bg-grayLight"
                }`}
              >
                <img src={q1} alt="q2" />
                <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">
                  {item.desiredCourse}
                </p>
              </Button>
            ))
          : progress === 1
          ? studyGoals.map((item, idx) => (
              <Button
                key={idx}
                type="button"
                onClick={() => handleSelectAnswer(item.id)}
                variant="ghost"
                className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${
                  isActive === item.id && "bg-grayLight"
                }`}
              >
                <img src={q1} alt="q2" />
                <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">
                  {item.studyGoal}
                </p>
              </Button>
            ))
          : progress === 3 ?  heardAboutPlatforms.map((item, idx) => (
              <Button
                key={idx}
                type="button"
                onClick={() => handleSelectAnswer(item.id)}
                variant="ghost"
                className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${
                  isActive === item.id && "bg-grayLight"
                }`}
              >
                <img src={q1} alt="q2" />
                <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">
                  {item.heardAboutPlatform}
                </p>
              </Button>
            )) : <PhoneInput onChange={(value) => {
                setFormData({
                    ...formData,
                    phone: value
                })
            } } />

        }
      </div>

      <div className="flex items-center gap-6 mt-5">
        {progress > 1 && (
          <CustomButton isIcon title={"Prev"} variant={"secondary"} fn={handleBack} />
        )}
        {progress < 4 && (
          <CustomButton isIcon title={"Next"} variant={"secondary"} fn={handleProgress} />
        )}
         {
            progress === 4  &&  <CustomButton title="Create an iSabiBook account" variant="primary" fn={handleSubmit} />
         }
      </div>
    </div>
  );
};

export default Questions;
