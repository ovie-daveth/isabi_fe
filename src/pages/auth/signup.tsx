import AuthLayout from "./authlayout";
import { MdArrowOutward } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
// import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/atoms/button";
import { AuthService } from "@/api/auth";
import { AuthResponse, SignUpRequest } from "@/variables/auth";
import { toastProp } from "./interface/types";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }).refine((name) => name.includes(" "), {
    message: "Full name must include both last name and first name (LastName First).",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
}).superRefine((values, ctx) => {
  if (values.confirmPassword !== values.password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });
  }
});


const SignUp = () => {

  // const navigate = useNavigate()
  const authService = new AuthService();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [loading, setLoading] = useState(false)
  const [openToast, setOpenToast] = useState<toastProp>({
    isOpen: false
  })
  const [message, setMessage] = useState("")

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
  
    // Split full name into firstName (second part) and lastName (first part)
    const [lastName, ...firstNameArr] = values.fullName.trim().split(" ");
    const firstName = firstNameArr.join(" "); // Handles multi-word first names
  
    if (!firstName) {
      form.setError("fullName", { type: "manual", message: "Both first and last names are required." });
      setLoading(false);
      return;
    }
  
    const request: SignUpRequest = {
      firstName,
      lastName,
      email: values.email,
      password: values.password,
    };
  
    try {
       const response = await authService.SignUpUsers(request);
      if (response) {
        console.log("signup", response);
        const data = response as AuthResponse
        localStorage.setItem("token", data?.token)
        localStorage.setItem("userId", data?.userId)
        localStorage.setItem("email", values.email)
        setMessage(data.message)
        setLoading(false);
        setOpenToast({
          isOpen: true,
          type: "success"
        });
      }
    } catch (error: any) {
      console.log(error);
      setMessage(error?.response.data.message)
      setLoading(false);
      setOpenToast({
        isOpen: true,
        type: "error"
      })
    }

    // const axios = require('axios');

    // const options = {
    //   method: 'POST',
    //   url: 'http://isabibook.onrender.com/api/auth/signup',
    //   data: request
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }


  }
  

  const [focusState, setFocusState] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleFocus = (field: string) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  type FormFieldNames = "fullName" | "email" | "password" | "confirmPassword";

  const handleBlur = (field: FormFieldNames) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: prev[field] && !!form.getValues(field), // Keep label visible if there is a value
    }));
};


  return (
    <AuthLayout setOpenToast={setOpenToast} openToast={openToast} toastTitle="OTP Sent" toastMessage={message} setOpen={setLoading} loadingMessage="Siging up, Please wait..." loading={loading} progress={1} title="Sign up">
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
            Sign up
          </h1>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className=" relative">
                    <FormLabel className={`absolute bg-white w-fit p-2 left-10 -top-3 text-gray-500 ${focusState.fullName ? "block" : "hidden"}`}>
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={focusState.fullName ? "" : "Full Name"}
                        onFocus={() => handleFocus("fullName")}
                        onBlur={() => handleBlur("fullName")}
                        className="h-16 rounded-3xl text-gray-500 placeholder:text-gray-500 font-medium placeholder:font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className=" relative">
                    <FormLabel className={`absolute bg-white w-fit p-2 left-10 -top-3 text-gray-500 ${focusState.confirmPassword ? "block" : "hidden"}`}>
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder={focusState.confirmPassword ? "" : "Confirm Password"}
                        onFocus={() => handleFocus("confirmPassword")}
                        onBlur={() => handleBlur("confirmPassword")}
                        className="h-16 rounded-3xl text-gray-500 placeholder:text-gray-500 font-medium placeholder:font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomButton title="Create an iSabiBook account" variant="primary" />

            </form>
          </Form>
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

export default SignUp;
