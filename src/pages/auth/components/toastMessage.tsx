import React, { Dispatch, SetStateAction } from 'react'
import star from "@/assets/star1.png";
import pattern from "@/assets/pattern4.png";
import { Button } from '@/components/ui/button';
import { GrClose } from 'react-icons/gr';

const ToastMessage = ({ loadingMessage, setOpen, title }: {setOpen: Dispatch<SetStateAction<boolean>>, loadingMessage: string, title: string }) => {
  return (
   <div className='fixed inset-0 flex items-center justify-center bg-black/20 w-[90%] m-auto z-50'>
     <div className="fixed w-[400px] h-[150px] bg-white rounded-3xl shadow-lg drop-shadow-md p-4 z-50 right-36 bottom-10">
        <Button onClick={() => setOpen(false)} className="absolute right-4 top-3 bg-gray-300 h-16 w-16 flex items-center justify-center text-primary rounded-3xl hover:bg-gray-200">
            <GrClose className="text-xl" />
        </Button>
        <div className="mt-2 ml-4">
          <div className="">
          <h1 className="font-semibold text-3xl">{title}</h1>
          <p className=" text-gray-500 tracking-wider mt-2 text-xl font-medium">{loadingMessage}</p>
        </div>
        <Button className="mt-12 p-6 rounded-full">
            {title.toLowerCase() === "registered" ? "Sign into iSabiBook" : "Open Mail"}
        </Button>
          </div>
        <img src={pattern} alt="pattern" className="absolute bottom-0 right-0" />
      </div>
   </div>
  )
}

export default ToastMessage
