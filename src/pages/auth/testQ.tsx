import AuthLayout from "./authlayout";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/atoms/button";
import q2 from "@/assets/q2.png"
import Questions from "./components/questions";
import { toastProp } from "./interface/types";
import { getCookie } from "@/lib/helpers"; 


const TestQuestion = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [openToast, setOpenToast] = useState<toastProp>({
    isOpen: false
  })
  const [progress, setProgress] = useState(1)
  const [message, setMessage] = useState("")

 const getQuestion = (id: number) => {
  let questions: string = "";
  
  questions = id === 1 ? "What is your desired Goal?" : id === 2 ? "What subject are you starting with?" : id === 3 ? "Where did you hear about that?" : "Input your phone number to proceed"

  return questions

 }

 useEffect(() => {
  const data = getCookie("_session")
  if(data){
    console.log(data)
  } else {
    console.log("Notjing")
  }
 }, [])

  
  

  return (
    <AuthLayout toastTitle={"Registered"} setOpenToast={setOpenToast} openToast={openToast} setOpen={setLoading} toastMessage={message} loading={loading} progress={3} title="Sign up">
      <div className="">
        <div className="w-full bg-white rounded-3xl p-10">
          <div className="flex items-center gap-2 w-[90%] mx-auto">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx}
                className={`bg-primary w-[33.3%] h-[4px] rounded-4xl`}
              ></div>
            ))}
          </div>
          <h1
            className="md:text-4xl text-xl font-bold"
            style={{ marginTop: 30, marginLeft: 20, marginBottom: 30 }}
          >
            Answer Test Question
          </h1>

          {/* Form */}
          <div>
            <div className="border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5">
              <img src={q2} alt="q1" />
              <p className="text-start lg:text-md xl:text-lg break-words whitespace-normal">{getQuestion(progress)}</p>
            </div>

           <div className="mt-10 w-full">
              <form className="w-full flex-col flex gap-3">
                {
                    <Questions setMessage={setMessage} setLoading={setLoading} setOpenToast={setOpenToast} setProgress={setProgress} progress={progress} />
                }

              </form>
           </div>
          </div>
        </div>
        <div className="pt-6 pl-16 pb-5 flex items-center gap-3">
          <h4 className="font-semibold text-foreground text-lg">Already have an account? </h4>
          <a className="text-primary hover:text-primary/80 font-semibold text-lg" href="/auth/login">
            Sign in
          </a>
          <MdArrowOutward className="text-primary text-xl" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default TestQuestion;
