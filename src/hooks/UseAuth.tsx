import React, { useState } from "react";
import { AuthUserType } from "../../types/AuthUserTypes";
import { toASCII } from "punycode";
import { toast } from "react-toastify";

function UseAuth() {
  let auth = null;
  if (localStorage.getItem("_auth")) {
    auth = JSON.parse(localStorage.getItem("auth") || "");
  }
  const [account, setAccount] = useState<AuthUserType | null>(auth);

  //provide current user status
  const currentUser = () => {
    return account;
  };

  //login a user
  const login = async (email: string, password: string) => {
    if (account?.email) {
      return toast.error("User is already logged in.");
    }

    try {
      const request = await fetch(process.env.BACKEND_API + "/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      //if successful
      if (request.status == 200) {
        const data = await request.json();
        localStorage.setItem("_auth", JSON.stringify(data));
        return setAccount(data);
      }

      //if not found
      if (request.status == 404) {
        return toast.error("No user found with that email");
      }

      //some client error
      if (request.status == 401) {
        const data = await request.json();
        return toast.error(data.msg);
      }
      return toast.error("An error while login, please try again later.");
    } catch (e) {
      return toast.error("Please check your network connection.");
    }
  };

  const logout = async () => {
    const request = await fetch(process.env.BACKEND_API + "/auth/logout");
    if (request.status === 200) {
      toast.success("You have successfully signed out.");
      localStorage.removeItem("_auth");
    } else {
      toast.error("You may not have completely signed out.");
    }
  };

  return { login, currentUser, logout };
}

export default UseAuth;
