import { useState } from "react";
import { SignInRequest, signIn } from "services/signIn";
import { PageRoutes } from "constants/routes";
import apiCall from "apiCall";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = async () => {
    try {
      const signedIn = await apiCall<SignInRequest, boolean>({
        loading: true,
        request: signIn,
        data: { email: username, password: password },
      });
      if (signedIn) {
        window.location.assign(PageRoutes.Home);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <input
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onClickSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;
