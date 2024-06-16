export const BASE_API_URL =
  process.env.BASE_API_URL || "http://localhost:4000/api";
export const SIGN_IN_API_PATH = process.env.SIGN_IN_API_PATH || "/users/signIn";
export const NEED_TO_FORMAT_API_RESPONSE_ERROR =
  process.env.NEED_TO_FORMAT_API_RESPONSE_ERROR === "True";
