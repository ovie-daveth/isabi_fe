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
import { useState } from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/atoms/button";
import { AuthService } from "@/api/auth";
import { loginRequest } from "@/variables/auth";
import { toastProp } from "./interface/types";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
 
});


const SignIn = () => {

  const navigate = useNavigate()
  const authService = new AuthService();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false)
  const [openToast, setOpenToast] = useState<toastProp>()


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form", values);
    setLoading(true)
    await authService.Login(values as loginRequest)
    .then((data) => {
      console.log('login', data)
      setLoading(false)
      setOpenToast({
        isOpen: true,
        type: "success"
      })
    })  

  }

  const [focusState, setFocusState] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (field: string) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  type FormFieldNames = "email" | "password";

  const handleBlur = (field: FormFieldNames) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: prev[field] && !!form.getValues(field), // Keep label visible if there is a value
    }));
};


  return (
    <AuthLayout  setOpen={setLoading} loadingMessage="Loading your account, Please wait..." loading={loading} progress={1} title="Sign in" openToast={openToast} setOpenToast={setOpenToast} toastTitle="OTP Sent" toastMessage="Login opt sent to mail">
      <div>
        <div className="w-full bg-white rounded-3xl p-10">
          <h1
            className="md:text-5xl text-2xl font-bold"
            style={{ marginTop: 30, marginLeft: 20, marginBottom: 30 }}
          >
            Enter Details
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" relative">
                    <FormLabel className={`absolute bg-white w-fit p-2 left-10 -top-3 text-gray-500 ${focusState.password ? "block" : "hidden"}`}>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder={focusState.password ? "" : "Password"}
                        onFocus={() => handleFocus("password")}
                        onBlur={() => handleBlur("password")}
                        className="h-16 rounded-3xl text-gray-500 placeholder:text-gray-500 font-medium placeholder:font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomButton title="Login to your iSabiBook account" variant="primary" />
            </form>
          </Form>
        </div>
        
        <div className="pt-6 xl:px-16 px-5 pb-5 flex items-center justify-between xl:text-xl">
            <Link to="/auth/reset-password" className="text-primary font-semibold capitalize ">reset password</Link>
          <div className="flex items-center gap-3">
            <h4 className="font-semibold text-foreground">Don't have an account? </h4>
            <a className="text-primary hover:text-primary/80 font-semibold text-lg" href="/auth/signup">
                Sign up
            </a>
            <MdArrowOutward className="text-primary text-xl" />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
