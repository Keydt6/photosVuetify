import { apiHttp } from "../axiosApi.js";
import {
  photosPath
} from "../config/apiRoute.js";

export const getPhotos = () => apiHttp("GET", `${photosPath}`);