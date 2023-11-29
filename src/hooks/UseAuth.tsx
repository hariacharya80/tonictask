import React, { useState } from "react";
import { AuthUserType } from "../../types/AuthUserTypes";
import { toASCII } from "punycode";

function UseAuth() {
  const [account, setAccount] = useState<AuthUserType | null>(null);

  //provide current user status
  const currentUser = () => {
    return account;
  };

  //login a user
  const login = async (email: string, password: string) => {
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
        setAccount(data);
      }

      //if not found
      if (request.status == 404) {
        //no user with that email or password.
      }

      if (request.status == 401) {
        //some client error
        const data = await request.json();
      }

      return false;
    } catch (e) {
      return false;
    }
  };

  return {};
}

export default UseAuth;
