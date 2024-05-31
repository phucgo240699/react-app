import { signIn } from "services/signIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "constants/routes";

const SignInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = async () => {
    const signedIn = await signIn({ email: username, password });
    if (signedIn) {
      window.location.assign(PageRoutes.Home);
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
