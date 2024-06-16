export enum RequestStatusCode {
  Success = parseInt(process.env.REQUEST_STATUS_CODE_SUCCESS ?? "200"),
  NotAcceptable = parseInt(
    process.env.REQUEST_STATUS_CODE_NOT_ACCEPTABLE ?? "406"
  ),
  ExpiredAccessToken = parseInt(
    process.env.REQUEST_STATUS_CODE_EXPIRED_ACCESS_TOKEN ?? "401"
  ),
  ExpiredRefreshToken = parseInt(
    process.env.REQUEST_STATUS_CODE_EXPIRED_REFRESH_TOKEN ?? "403"
  ),
  InternalServerError = parseInt(
    process.env.REQUEST_STATUS_CODE_INTERNAL_SERVER_ERROR ?? "500"
  ),
}
