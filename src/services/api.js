import axios from "axios";
import processAJAXError from "../helpers/processAJAXerror";

const API_URL = process.env.API_URL || "http://localhost:3001"; // express server URI

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { Accept: "application/json" }
});

 export function setAuthorizationTokenOnHeader(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}
export function postRequest(path, data) {
  return api
    .post(path, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return processAJAXError(error);
    });
}

export function getRequest(path) {
  return api
    .get(path)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return processAJAXError(error);
    });
}
