import AuthLayout from "./authlayout";
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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  otp: z.string().min(6, {
    message: "OTP must be six digits",
  }),
});

const OTPpage = () => {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  
  const [loading, setLoading] = useState(false)
  const [openToast, setOpenToast] = useState(false)

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {

    const otpWithoutDashes = values.otp.replace(/-/g, "");
    console.log("OTP submitted:", otpWithoutDashes);

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/test-questions")
    }, 3000);
  }

  useEffect(() => {
    setOpenToast(true)
  }, [])

  const [focusState, setFocusState] = useState({
    otp: false,
  });

  const handleFocus = (field: string) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  type FormFieldNames = "otp";
  const handleBlur = (field: FormFieldNames) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: prev[field] && !!form.getValues(field), // Keep label visible if there is a value
    }));
};

  // Handle OTP input change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and limit length to 6
    const rawValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);

    // Add dashes after every digit, except the last one
    let formattedValue = rawValue;
    if (formattedValue.length > 1) {
      formattedValue = formattedValue.replace(/(\d{1})(?=\d)/g, "$1-");
    }

    form.setValue("otp", formattedValue);
  };

  return (
    <AuthLayout setOpenToast={setOpenToast} openToast={openToast} toastTitle="OTP Sent" toastMessage="Verification OTP was sent" setOpen={setLoading} loadingMessage="Verifiying OTP, please wait..." loading={loading}  progress={2} title="Sign up">
      <div>
        <div className="w-full bg-white rounded-3xl p-10">
          <div className="flex items-center gap-2 w-[90%] mx-auto">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx}
                className={`${(idx === 0 || idx === 1) && "bg-primary"} w-[33.3%] bg-gray-300 h-[4px] rounded-4xl`}
              ></div>
            ))}
          </div>
          <h1
            className="md:text-5xl text-2xl font-bold"
            style={{ marginTop: 30, marginLeft: 20, marginBottom: 30 }}
          >
            Account Verification
          </h1>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className={`absolute bg-white w-fit p-2 left-10 -top-3 text-gray-500 ${focusState.otp ? "block" : "hidden"}`}>
                      Enter Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value}
                        onChange={handleOtpChange}
                        placeholder={focusState.otp ? "" : "Enter Code"}
                        onFocus={() => handleFocus("otp")}
                        onBlur={() => handleBlur("otp")}
                        className="h-16 rounded-3xl text-gray-800 text-3xl placeholder:text-gray-500 font-bold placeholder:font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full flex flex-row-reverse items-center gap-2 h-16 rounded-full justify-between hover:bg-primary/80"
              >
                <span className="bg-white w-[3.8rem] h-[3.8rem] rounded-full flex items-center justify-center -mr-3">
                  <MdArrowOutward className="text-primary" />
                </span>
                <span className="ml-5 font-bold text-lg">Verify and Continue</span>
              </Button>
            </form>
          </Form>
        </div>
        <div className="pt-6 pl-16 pb-5 flex items-center gap-3">
          <h4 className="font-semibold text-foreground text-lg">Didn't get opt? </h4>
          <Link to="/" className="text-primary hover:text-primary/80 font-semibold text-lg">
            Resend OTP
          </Link>
          <MdArrowOutward className="text-primary text-xl" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default OTPpage;
