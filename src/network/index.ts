import XHR from "./request"
import { BASE_URL, TIMEOUT } from "./request/config"

const YWRequest = new XHR({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export default YWRequest