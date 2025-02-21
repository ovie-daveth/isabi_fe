import { MdArrowOutward } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResetLayout from "./resetLayout";
import CustomButton from "@/components/atoms/button";
import { toastProp } from "./interface/types";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  })
 
});


const ResetPassword = () => {

  const navigate = useNavigate()

  const [openToast, setOtpToast] = useState<toastProp>({
    isOpen: false
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [loading, setLoading] = useState(false)

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form", values);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOtpToast({
        isOpen: true,
        type: "success"
      })
    }, 3000);
    

  }

  const [focusState, setFocusState] = useState({
    email: false,
  });

  const handleFocus = (field: string) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  type FormFieldNames = "email"

  const handleBlur = (field: FormFieldNames) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: prev[field] && !!form.getValues(field), // Keep label visible if there is a value
    }));
};


  return (
    <ResetLayout  setOpen={setLoading} loadingMessage="Mail is being sent, Please wait..." loading={loading} toastMessage="Password reset OTP sent" toastTitle="Reset OTP sent" setOpenToast={setOtpToast} openToast={openToast}>
      <div>
        <div className="w-full bg-white rounded-3xl p-10">
        <div className="flex items-center gap-2 w-[90%] mx-auto">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} 
                className={`${idx === 0 && "bg-primary"} w-[33.3%] bg-gray-300 h-[4px] rounded-4xl`}
              ></div>
            ))}
          </div>
          <h1
            className="md:text-5xl text-2xl font-bold"
            style={{ marginTop: 30, marginLeft: 20, marginBottom: 30 }}
          >
            Enter account mail
          </h1>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
             
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" relative">
                    <FormLabel className={`absolute bg-white w-fit p-2 left-10 -top-3 text-gray-500 ${focusState.email ? "block" : "hidden"}`}>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={focusState.email ? "" : "Email"}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        className="h-16 rounded-3xl text-gray-500 placeholder:text-gray-500 font-medium placeholder:font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomButton title="Send me reset OTP" variant="primary" />

            </form>
          </Form>
        </div>
          <div className="pt-6 px-16 pb-5 text-xl flex items-center gap-3">
            <h4 className="font-semibold text-foreground">Remember Password? </h4>
            <a className="text-primary hover:text-primary/80 font-semibold text-lg" href="/auth/login">
                Sign in
            </a>
            <MdArrowOutward className="text-primary text-xl" />
          </div>
      </div>
    </ResetLayout>
  );
};

export default ResetPassword;
