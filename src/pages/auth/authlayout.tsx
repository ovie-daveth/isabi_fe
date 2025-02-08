import React, { Dispatch, ReactNode, SetStateAction } from "react";
import img1 from "@/assets/Ellipse 21.png";
import img2 from "@/assets/Ellipse 22.png";
import img3 from "@/assets/Ellipse 23.png";
import img4 from "@/assets/Ellipse 24@2x.png";

import BG from "@/assets/BG.png";

import google from "@/assets/google.svg";
import apple from "@/assets/apple.svg";
import { MdNoFlash } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { GrCheckmark } from "react-icons/gr";import LoadingState from "./components/loadingState";
import ToastMessage from "./components/toastMessage";
import Logo from "@/components/atoms/logo";
;

const gains = [
  "Access content anywhere",
  "Learn from qualified and accredited tutors",
  "Comprehensive learning experience",
  "Access content anywhere",
];

const AuthLayout = ({
  children,
  style,
  title,
  progress,
  loading,
  loadingMessage,
  setOpen,
  toastMessage,
  setOpenToast,
  openToast,
  toastTitle
}: {
  children: ReactNode;
  style?: string;
  title: string;
  progress: number
  loading: boolean,
  loadingMessage?: string
  toastMessage?: string
  toastTitle?: string
  openToast?: boolean
  setOpenToast?: Dispatch<SetStateAction<boolean>>
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className={`${style} min-h-screen w-full pt-28`}>
      {
          loading && <LoadingState setOpen={setOpen} loadingMessage={loadingMessage} />
      }
      {
        openToast && <ToastMessage title={toastTitle} setOpen={setOpenToast} loadingMessage={toastMessage} />
      }
      <div className="flex items-start xl:w-[70%] mx-auto justify-between xl:pl-28 lg:px-0 md:w-[90%] w-full md:px-0 px-5 flex-col md:flex-row ">
        <div className="xl:w-[40%] lg:w-[55%] md:w-[50%] ">
          <Logo />
          <div className={` mt-16`}>
            <div className="flex flex-col justify-center items-start ">
              <div className="flex flex-col gap-10">
                <h1 className="md:text-8xl text-6xl font-bold">{title}</h1>
                <p className="md:text-2xl text-xl max-w-[350px]">
                  Join a network of over 500 students for collaboration and
                  motivation
                </p>
              </div>
              <div className="flex bg-gray-200 w-fit p-2 rounded-full mt-12">
                <img src={img4} alt="student" className="w-16" />
                <img src={img2} alt="student" className="w-16" />
                <img src={img1} alt="student" className="w-16" />
                <img src={img3} alt="student" className="w-16" />
                <div className="bg-white rounded-full flex items-center justify-center h-16 w-16">
                  <span className="font-semibold md:text-xl text-md">+23</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-16">
              <h4 className="font-bold md:text-2xl text-xl header-text0">
                What you stand to get;
              </h4>
              <ul className="flex items-start flex-col gap-2 text md:text-xl text-md mt-1">
                {gains.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <GrCheckmark />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] lg:w-[45%] md:w-[55%] w-full lg:-mt-10 mt-10">
          <div className={`bg-grayLight w-[100%] rounded-3xl drop-shadow-md shadow-md p-3`}>
            {children}
          </div>
          {(title.toLowerCase() === "sign up" && progress === 1) || (title.toLowerCase() === "sign in" ) && (
            <div className=" flex justify-between items-center gap-10 mt-10 w-[100%]">
              <Button className="w-full h-16 rounded-3xl bg-grayLight text-foreground font-semibold gap-3" variant="ghost">
                <span>
                <img src={google} />
                </span>
                <span>Register with Google</span>
              </Button>
              <Button className="w-full h-16 rounded-3xl bg-grayLight text-foreground font-semibold gap-3" variant="ghost">
                <span>
                 <img src={apple} alt="apple icon" />
                </span>
                <span>Register with Apple</span>
              </Button>
            </div>
          )}
          {
             title.toLowerCase() === "sign up" && progress === 2 && (
              <div className="mt-10">
                <img src={BG} alt="" />
              </div>
             )
          }
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
