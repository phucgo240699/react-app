import { SIGN_IN_API_PATH } from "constants/index";
import { postRequest } from "services";
import { SignInPayload } from "services/types/signIn";

export const signIn = async ({
  email,
  password,
}: SignInPayload): Promise<void> => {
  await postRequest({
    url: SIGN_IN_API_PATH,
    body: { email, password },
  });
};
