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
//import LoadingState from "./components/loadingState";
import CustomButton from "@/components/atoms/button";
import { toastProp } from "./interface/types";
import ResetLayout from "./resetLayout";

const formSchema = z.object({
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


const NewPassword = () => {

  // const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [loading, setLoading] = useState(false)
  const [openToast, setOpenToast] = useState<toastProp>({
    isOpen: false
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form", values);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpenToast({
        isOpen: true,
        type: "success"
      })
    }, 3000);
    

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

  type FormFieldNames =  "password" | "confirmPassword";

  const handleBlur = (field: FormFieldNames) => {
    setFocusState((prev) => ({
      ...prev,
      [field]: prev[field] && !!form.getValues(field), // Keep label visible if there is a value
    }));
};


  return (
    <ResetLayout setOpen={setLoading} loadingMessage="Updating your account, Please wait..." loading={loading} setOpenToast={setOpenToast} openToast={openToast} toastMessage="Login with your new password" toastTitle="New password set">
      <div>
        <div className="w-full bg-white rounded-3xl p-10">
        <div className="flex items-center gap-2 w-[90%] mx-auto">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} 
                className={`bg-primary w-[33.3%] bg-gray-300 h-[4px] rounded-4xl`}
              ></div>
            ))}
          </div>
          <h1
            className="md:text-5xl text-2xl font-bold"
            style={{ marginTop: 30, marginLeft: 20, marginBottom: 30 }}
          >
            Create new password
          </h1>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <CustomButton title="Reset your iSabiBook password" variant="primary" />
            </form>
          </Form>
        </div>
        
        <div className="pt-6 pl-16 pb-5 flex items-center gap-3">
          
        </div>
      </div>
    </ResetLayout>
  );
};

export default NewPassword;
