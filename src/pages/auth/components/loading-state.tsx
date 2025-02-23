import { Dispatch, SetStateAction, useEffect, useState } from "react";
import star from "@/assets/star1.png";
import star2 from "@/assets/star2.png";
import spiral from "@/assets/spiral.png";
import pattern from "@/assets/pattern.png";
import loader from "@/assets/loader.gif"
import { GrClose } from "react-icons/gr";
import { Button } from "@/components/ui/button";

const LoadingState = ({ loadingMessage, setOpen }: {setOpen: Dispatch<SetStateAction<boolean>>, loadingMessage: string }) => {

  const [pathename, setPathname] = useState("")

  useEffect(() => {
    const path = window.location.pathname
    console.log("path", path)
    setPathname(path)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 lg:w-[90%] m-auto z-50">
      <div className="xl:w-[30%] md:w-[70%] w-[80%] lg:h-[290px] h-[250px] bg-white rounded-3xl shadow-lg drop-shadow-md p-4 text-center z-50 relative">
        <img src={pathename === "/signup" ? star : pathename === "/otp" ? star : pathename === "/login"  ? star2 : pathename === "/new-password" ? star  : spiral} alt="star" className=" absolute top-2 left-0 w-24" />
        <Button onClick={() => setOpen(false)} className="absolute right-4 top-3 bg-gray-300 h-16 w-16 flex items-center justify-center text-primary rounded-full hover:bg-gray-200">
            <GrClose className="text-xl" />
        </Button>
        <div className="lg:mt-20 mt-10 flex items-center flex-col">
        <img src={loader} alt="loader" />
          <div className="-mt-10">
          <h1 className="font-semibold text-5xl">Processing...</h1>
          <p className=" text-gray-500 tracking-wider mt-2 text-xl capitalize font-medium">{loadingMessage}</p>
        </div>
          </div>
        <img src={pattern} alt="pattern" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default LoadingState;
