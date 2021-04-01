import axios from "axios";
import { store } from "../store";

export const API_URL_BACKEND = process.env.VUE_APP_API_URL_BACKEND;
export const API_URL_BACKEND_PHOTOS = process.env.VUE_APP_API_URL_BACKEND_PHOTOS;


axios.interceptors.request.use(
  config => {
    // Do something before request is sent

    //
    return config;
  },
  error => {
    // Do something with request error
    //
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // Do something before response is sent
    return response;
  },
  error => {
    // if the system detects user is not logged, itll log out him
    if (error.response.status === 401) {
      store.dispatch("logoutAction");
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export const apiHttp = async (
  method,
  endpoint,
  data,
  options = {},
  loading = true
) => {
  const { token } = localStorage;
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + `${token}`
  };

  var hasHeadersProperty = Object.prototype.hasOwnProperty.call(options, "headers");
  if (!hasHeadersProperty) options.headers = defaultHeaders;

  let serviceResponse = {};
  let url_back = ''
  url_back = (endpoint === '/photos' ?  API_URL_BACKEND_PHOTOS : API_URL_BACKEND)

  method = method.toLowerCase();
  const servicePromise = axios({
    method,
    url: `${url_back}${endpoint}`,
    data,
    ...options
  });

  try {
    if (loading) {
      window.getApp.$emit("LOADING", true);
    }
    const [materializedPromise] = await Promise.all([servicePromise]);
    serviceResponse = { ...materializedPromise.data };
  } catch (error) {
    serviceResponse = buildErrorMessage(error);
  }
  window.getApp.$emit("LOADING", false);
  return serviceResponse;
};

function buildErrorMessage(error) {
  let errorResponse = {
    ok: 0,
    status: 0,
    message: {
      code: String,
      text: String
    }
  };
  console.log('error', error)
  if (typeof error.response === "undefined") {
    errorResponse.message.text = "No Autorizado";
  } else if (error.response.status === 400) {
    errorResponse.message.text = "Solicitud Incorrecta";
  } else if (error.response.status === 401) {
    errorResponse.message.text = "Credenciales Incorrectas";
  } else if (error.response.status === 404) {
    errorResponse.message.text = "Servicio No disponible";
  } else if (error.response.status === 500) {
    errorResponse.message.text = "Error de Conexión";
  } else if (error.response.status === 405 || error.response.status === 406) {
    errorResponse.message.text = "Solicitud Invalida";
  } else if(error.response.status === 422) {
    errorResponse.message.text = "Datos invalidos";
  } else errorResponse.message.text = "Error general de la aplicación";
  errorResponse.ok = 0;
  errorResponse.message.code = "E999";
  errorResponse.status = error.response.status;
  return errorResponse;
}
