import Cookies from "js-cookie";

// Get a cookie
export const token = Cookies.get("loginVerificationToken");

// Set a cookie
// Cookies.set("loginVerificationToken", "your-token-here", { expires: 7, path: "" });

// // Delete a cookie
// Cookies.remove("loginVerificationToken");


export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };


  export const setUserId = (id: string) => {
    localStorage.setItem("userId", id)
  }

  export const getUserId = () => {
    const data = localStorage.getItem("userId")
    return data
  }

  
  export const setToken = (id: string) => {
    localStorage.setItem("token", id)
  }

  export const getToken = () => {
    const data = localStorage.getItem("token")
    return data
  }


//   const userToken = getCookie("authToken");

//   if (userToken) {
//     localStorage.setItem("authToken", userToken);
//   }

  