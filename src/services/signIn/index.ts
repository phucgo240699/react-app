import { postRequest } from "services";
import { SignInPayload } from "services/types/signIn";

export const signIn = async ({
  email,
  password,
}: SignInPayload): Promise<void> => {
  await postRequest({
    url: "/users/signIn",
    body: { email, password },
  });
};
