import { apiHttp } from "../axiosApi.js";
import {
  userLogin,
  userRegister
} from "../config/apiRoute.js";

export const loginApi = ({ email, password }) => {
  return apiHttp(
    "POST",
    `${userLogin}`,
    { email: email, password: password },
    authHeader
  );
};

export const registerApi = ({ name, email, password }) => {
  return apiHttp(
    "POST",
    `${userRegister}`,
    { name: name, email: email, password: password, status: 'a' },
    authHeader
  );
};

const authHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Basic"
  }
};
