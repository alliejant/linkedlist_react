import * as t from "./constants";
import { getRequest, postRequest } from "../../services/api";
import axios from "axios";
import {setAuthorizationTokenOnHeader} from "../../services/api"
import jwtDecode from "jwt-decode"

const BASE_URL = 'http://localhost:3001'

export function signup(userData) {
  return  async function (dispatch){
    try{
      //using postRequest from ../../services/api
      //????? will it know here how to get the `${BASE_URL}?????
      //why post request to users????
      const response = await postRequest(`${BASE_URL}/users`, { data: userData });
      const newUser = response.data;
      dispatch(userSignupSuccess(newUser))
    } catch (error){ //!!!!!added error inside the userSignUpFail()!!!!
      dispatch(userSignupFail(error))
    } 
  }
}
export function login(userData) {
  return dispatch => {
    //we'll need to add this route..we have log in route???????
    return postRequest(`${BASE_URL}/users/login`, {data: userData}).then(res => {
      //???added data.token here???
      //cause the data seem to look like this {message: 'Authenticated!', token: token});
      if(res.message === 'Invalid Credentials'){
        dispatch(userLoginFail(res.message));
      } else {
        const token = res.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationTokenOnHeader(token);
        dispatch(userLoginSuccess(jwtDecode(token)));
      }
    });
  }
}
//???should e keep this here or in a separate file "useractiondelition???
export function logout() {
  return dispatch => {
    //???does it have access to localStorage form here
    //??is the token there callsed jwt
    localStorage.removeItem('jwtToken');
    setAuthorizationTokenOnHeader(false);
    dispatch(setCurrentUser({}));
  }
}

function setCurrentUser(user) {
  return {
    type: t.SET_CURRENT_USER,
    user
  }
}
function userLoginSuccess(user) {
  return {
    type: t.SET_CURRENT_USER,
    currentUser: user.currentUser
  };
}
function userLoginFail(error){
  return {
    type: t.USER_LOGIN_FAIL,
    error
  }
}

function userSignupSuccess(user) {
  return {
    type: t.USER_SIGNUP_SUCCESS,
    user
  }
}

function userSignupFail(error) {
  return {
    type: t.USER_SIGNUP_FAIL,
    error
  };
}

//axios is buggy.. switched to fetch instead
//const newUser = await postRequest("/users", { data: userData });
/*const newUser = await axios.post("http://localhost:3001/users", {
  data: userData
});*/
