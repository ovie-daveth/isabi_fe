import { Dispatch, ReactNode, SetStateAction } from "react";
import logo from "@/assets/isabi.png";
import logoIcon from "@/assets/image.png";
import reset1 from "@/assets/triangle.png";
import reset2 from "../../assets/sphere.png";
import reset3 from "@/assets/triangle.png";

import bg from "@/assets/bg.png";

import LoadingState from "./components/loading-state";
import ToastMessage from "./components/toast-message";
import { toastProp } from "./interface/types";
;

const ResetLayout = ({
  children,
  style,
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
  loading: boolean,
  loadingMessage?: string
  toastMessage?: string
  toastTitle?: string
  openToast?: toastProp
  setOpenToast?: Dispatch<SetStateAction<toastProp>>
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className={`${style} min-h-screen w-full pt-28`}>
      {
          loading && loadingMessage && <LoadingState setOpen={setOpen} loadingMessage={loadingMessage} />
      }
      {
        openToast?.isOpen && <ToastMessage title={toastTitle ?? ""} setOpen={setOpenToast ?? (() => {})} loadingMessage={toastMessage ?? ""} openToast={openToast} />
      }
      <div className="flex items-start xl:w-[70%] mx-auto justify-between xl:pl-28 lg:px-0 md:w-[90%] w-full md:px-0 px-5 flex-col md:flex-row ">
        <div className="xl:w-[40%] lg:w-[55%] md:w-[50%] ">
          <div className="flex gap-3 items-center">
            <img src={logoIcon} alt="logo" className="w-9" />
            <img src={logo} alt="logo" className="w-40" />
          </div>
          <div className={` mt-16`}>
            <div className="flex flex-col justify-center items-start ">
              <div className="flex flex-col gap-10">
                <h1 className="lg:text-6xl text-4xl font-bold">Reset password</h1>
                <p className="md:text-2xl text-xl max-w-[350px]">
                  Join a network of over 500 students for collaboration and
                  motivation
                </p>
              </div>
            </div>
            <div className="flex xl:items-start items-center gap-5 mt-16">
              <img src={reset1} alt="" />
              <img src={reset2} alt="" />
              <img src={reset3} alt="" />
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] lg:w-[45%] md:w-[55%] w-full md:-mt-10 mt-10">
          <div className={`bg-grayLight w-[100%] rounded-3xl drop-shadow-md shadow-lg p-3`}>
            {children}
          </div>
              <div className="mt-10">
                <img src={bg} alt="" />
              </div>
            
        </div>
      </div>
    </div>
  );
};

export default ResetLayout;
