import type { AxiosRequestConfig, AxiosResponse} from "axios";
import { Interface } from "readline";

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {

}