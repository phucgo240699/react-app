import { useState } from "react";
import { signIn } from "services/signIn";
import { SignInPayload } from "services/types/signIn";
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
    await apiCall<SignInPayload, void>({
      loading: true,
      request: signIn,
      data: { email: username, password: password },
    });
    window.location.assign(PageRoutes.Home);
  };

  return {
    username,
    password,
    changeUserName,
    changePassword,
    signInClickHandler,
  };
};
