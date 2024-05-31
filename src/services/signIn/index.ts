import { postRequest } from "../config";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  await postRequest({
    loading: true,
    url: "/users/signIn",
    body: { email, password },
  });
  return true;
};
