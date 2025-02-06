import AuthLayout from "./authlayout";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import q2 from "@/assets/q2.png"
import q1 from "@/assets/q1.png"
import { Button } from "@/components/ui/button";


const TestQuestion = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isActive, setIsActive] = useState<number>(0)
  const [openToast, setOpenToast] = useState<boolean>(false)

  const handleSelectAnswer = (id: number) => {
    setIsActive(id)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setOpenToast(true)
  }
  

  return (
    <AuthLayout toastTitle="Registered" setOpenToast={setOpenToast} openToast={openToast} setOpen={setLoading} toastMessage="Your registration was successful" loading={loading} progress={3} title="Sign up">
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
              <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">Why minimalism works for modern portfolios</p>
            </div>

           <div className="mt-12 w-full">
              <form onSubmit={handleSubmit} className="w-full flex-col flex gap-3">
                <Button type="button" onClick={() => handleSelectAnswer(1)} variant="ghost" className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${isActive === 1 && "bg-grayLight"}`}>
                  <img src={q1} alt="q2" />
                  <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">Why minimalism works for modern portfolios</p>
                </Button>
                <Button type="button" onClick={() => handleSelectAnswer(2)} variant="ghost" className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${isActive === 2 && "bg-grayLight"}`}>
                  <img src={q1} alt="q2" />
                  <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">Why minimalism works for modern portfolios</p>
                </Button>
                <Button type="button" onClick={() => handleSelectAnswer(3)} variant="ghost" className={`border-2 border-grayLight rounded-full h-fit p-2 flex items-center justify-start gap-5 w-full ${isActive === 3 && "bg-grayLight"}`}>
                  <img src={q1} alt="q2" />
                  <p className="text-start lg:text-lg xl:text-xl break-words whitespace-normal">Why minimalism works for modern portfolios</p>
                </Button>
                <Button type="submit" className="mt-10 w-full flex flex-row-reverse items-center gap-2 h-16 rounded-full justify-between hover:bg-primary/80">
                <span className="bg-white w-[3.8rem] h-[3.8rem] rounded-full flex items-center justify-center -mr-3"><MdArrowOutward  className="text-primary" /></span>
                <span className="ml-5 font-bold text-lg">Create an iSabiBook account</span>
              </Button>
              </form>
           </div>
          </div>
        </div>
        <div className="pt-6 pl-16 pb-5 flex items-center gap-3">
          <h4 className="font-semibold text-foreground text-lg">Already have an account? </h4>
          <a className="text-primary hover:text-primary/80 font-semibold text-lg" href="">
            Sign in
          </a>
          <MdArrowOutward className="text-primary text-xl" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default TestQuestion;
