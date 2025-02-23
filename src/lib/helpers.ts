import Cookies from "js-cookie";

// Get a cookie
export const token = Cookies.get("loginVerificationToken");

// Set a cookie
// Cookies.set("loginVerificationToken", "your-token-here", { expires: 7, path: "" });

// // Delete a cookie
// Cookies.remove("loginVerificationToken");


export const getCookie = (name: string) => {
  console.log("usplit cookie", document.cookie)
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
};


  export const setUserId = (id: string) => {
    localStorage.setItem("userId", id)
  }

  export const getUserId = () => {
    const data: string = localStorage.getItem("userId") as string
    return data
  }

  
  export const setToken = (id: string) => {
    localStorage.setItem("token", id)
  }

  export const getToken = () => {
    const data: string = localStorage.getItem("token") as string
    return data
  }


//   const userToken = getCookie("authToken");

//   if (userToken) {
//     localStorage.setItem("authToken", userToken);
//   }

  