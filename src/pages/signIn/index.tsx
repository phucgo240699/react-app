import { useSignInHook } from "hooks/signIn";

const SignInPage = () => {
  const {
    username,
    password,
    changeUserName,
    changePassword,
    signInClickHandler,
  } = useSignInHook();
  return (
    <div>
      <input
        value={username}
        placeholder="Username"
        onChange={(e) => changeUserName(e.target.value)}
      />
      <input
        value={password}
        placeholder="Password"
        onChange={(e) => changePassword(e.target.value)}
      />
      <button onClick={signInClickHandler}>Sign In</button>
    </div>
  );
};

export default SignInPage;
