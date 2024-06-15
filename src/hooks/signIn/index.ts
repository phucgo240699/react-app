import { useState } from "react";
import { SignInRequest, signIn } from "services/signIn";
import { PageRoutes } from "constants/routes";
import apiCall from "apiCall";

export const useSignInHook = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUserName = (_username: string) => {
    setUsername(_username);
  };

  const changePassword = (_password: string) => {
    setPassword(_password);
  };

  const signInClickHandler = async () => {
    try {
      const signedIn = await apiCall<SignInRequest, boolean>({
        loading: true,
        request: signIn,
        data: { email: username, password: password },
      });
      if (signedIn) {
        window.location.assign(PageRoutes.Home);
      }
    } catch (error) {}
  };

  return {
    username,
    password,
    changeUserName,
    changePassword,
    signInClickHandler,
  };
};
