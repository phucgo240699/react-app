export enum HttpStatusCode {
  Success = 200,
  NotAcceptable = 406,
  ExpiredAccessToken = 401,
  ExpiredRefreshToken = 403,
  InternalServerError = 500,
}
