import { postRequest } from "services";

export interface SignInRequest {
  email: string;
  password: string;
}

export const signIn = async ({
  email,
  password,
}: SignInRequest): Promise<boolean> => {
  await postRequest({
    url: "/users/signIn",
    body: { email, password },
  });
  return true;
};
