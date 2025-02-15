import React, { Dispatch, SetStateAction } from 'react'
import pattern from "@/assets/pattern4.png";
import { Button } from '@/components/ui/button';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { toastProp } from '../interface/types';

const ToastMessage = ({ loadingMessage, setOpen, title, openToast }: {setOpen: Dispatch<SetStateAction<toastProp>>, loadingMessage: string, title: string, openToast: toastProp }) => {

  const navigate = useNavigate()
  const handleAction = () => {
    if(title.toLowerCase() === "registered"){
      navigate("/auth/login")
    } else if (title.toLowerCase() === "otp sent"){
      navigate("/auth/otp")
      setOpen({
        isOpen: false,
        type: "success"
      })
    } else if (title.toLowerCase() === "new password set"){
      navigate("/auth/login")
      setOpen({
        isOpen: false,
        type: "success"
      })
    } else if (title.toLowerCase() === "reset otp sent"){
      navigate("/auth/reset-otp")
      setOpen({
        isOpen: false,
        type: "success"
      })
    } else if (title.toLowerCase() === "email verified"){
      navigate("/auth/test-questions")
      setOpen({
        isOpen: false,
        type: "success"
      })
    }
    
  }
  return (
   <div className='fixed inset-0 flex items-center justify-center bg-black/20 lg:w-[90%] m-auto z-50'>
     <div className={`fixed lg:w-[400px] w-[280px] lg:min-h-[150px] min-h-[120px] ${openToast.type === "error" ? "bg-red-100" : "bg-white"} rounded-3xl shadow-lg drop-shadow-md p-4 z-50 lg:right-36 right-10 bottom-10`}>
        <Button onClick={() =>  setOpen({
        isOpen: false,
        type: "success"
      })} 
      className={`absolute right-4 top-3 ${openToast.type === "error" ? "bg-red-300 hover:bg-red-200" : "bg-gray-300 hover:bg-gray-200"} lg:h-16 lg:w-16 w-12 h-12 flex items-center justify-center text-primary rounded-3xl `}>
            <GrClose className="text-xl" />
        </Button>
        <div className="mt-2 ml-4">
          <div className="w-[90%]">
          <h1 className="font-semibold lg:text-3xl text-xl">{openToast.type === "error" ? "Error" : title}</h1>
          <p className=" text-gray-500 tracking-wider mt-2 lg:text-xl font-medium">{loadingMessage}</p>
        </div>
        <Button
         onClick={openToast.type === "error" ? () => {setOpen({
          isOpen: false
         })} : handleAction} 
         className={`lg:mt-12 mt-5 lg:p-6 rounded-full ${openToast.type === "error" && "bg-red-500 hover:bg-red-600"}`}>
            {
              openToast.type === "error" ? "Retry" : title.toLowerCase() === "registered" ? "Sign into iSabiBook" : title.toLowerCase() === "otp sent" ? "Open Mail" : title.toLowerCase() === "new password set" ? "Verify and continue" : title.toLowerCase() === "email verified" ? "Continue" : "Open Mail"
            }
        </Button>
          </div>
        <img src={pattern} alt="pattern" className="absolute bottom-0 right-0" />
      </div>
   </div>
  )
}

export default ToastMessage
