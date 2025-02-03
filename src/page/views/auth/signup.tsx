import RootLayout from "@/page/wrapper/rootlayout";
import React from "react";
import AuthLayout from "./layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <RootLayout>
      <AuthLayout title="Sign up">
      <div>
      <div className="w-full bg-white rounded-4xl" style={{padding: 30}}>
      <div className="flex items-center gap-2 w-[90%]" style={{margin:"auto", paddingTop: 10}}>
        {
          [1,2,3].map((_, idx) => (
            <div className={`${idx === 0 && "primary-bg"} w-[33.3%] bg-gray-300 h-[4px] rounded-4xl`}></div>

          ))
        }
      </div>
        <h1 className="md:text-5xl text-2xl font-bold" style={{marginTop: 30, marginLeft: 20, marginBottom: 30}}>Sign up</h1>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 2, width: '90%' } }}
        noValidate={false}
        autoComplete="on"
        className="w-full"
      >
        <div className="flex flex-col w-full">
          <TextField
          sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "15px",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "gray",
        },
        "&.Mui-focused": {
          borderColor: "gray",
        },
        "&.Mui-focused-within": {
          borderColor: "gray",
        },
      },
    }}
            required
            id="outlined-required"
            label="Full Name"
            defaultValue="john doe"
          />
          <TextField
            sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "15px",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "gray",
        },
        "&.Mui-focused": {
          borderColor: "gray",
        },
        "&.Mui-focused-within": {
          borderColor: "gray",
        },
      },
    }}
            required
            id="outlined-required"
            label="Email"
            defaultValue="eg Johndoe@gmail.com"
          />
          <TextField
            sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "15px",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "gray",
        },
        "&.Mui-focused": {
          borderColor: "gray",
        },
        "&.Mui-focused-within": {
          borderColor: "gray",
        },
      },
    }}
            required
            id="outlined-required"
            label="Password"
          type="password"
            defaultValue="12345"
          />
          <TextField
          sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "15px",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "gray",
        },
        "&.Mui-focused": {
          borderColor: "gray",
        },
        "&.Mui-focused-within": {
          borderColor: "gray",
        },
      },
    }}
            id="outlined-password-input"
            label="Comfirm Password"
            type="password"
            autoComplete="current-password"
          />
          <button className="primary-bg text-white rounded-4xl w-[94%] flex items-center justify-between p-0 font-bold md:text-lg cursor-pointer hover:primary-hover-bg">
            <span className="pl-5 font-bold">Create an iSabiBook account</span>
            <span className="bg-white p-4 rounded-full text-lg"><ArrowOutwardIcon className="priamry-text font-bold " /></span>
          </button>
        </div>
      </Box>
      </div>
        <div className="pt-6 pl-5 pb-5 flex items-center gap-3">
          <h4 className="font-semibold">Already have an account? </h4><Link className="priamry-text font-bold" to="">Sign in</Link><ArrowOutwardIcon className="priamry-text font-bold " />
        </div>
      </div>
      </AuthLayout>
    </RootLayout>
  );
};

export default SignUp;