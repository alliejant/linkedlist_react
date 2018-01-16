import * as t from "../actions/constants";

const DEFAULT_STATE = {
  username: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  currentCompany: null,
  photo: null,
  experience: [],
  education: [],
  skills: [],
  error: null
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case t.USER_SIGNUP_SUCCESS: {
      return { ...state, ...action.user };
    }
    case t.USER_SIGNUP_FAIL: {
     console.log(action.error);
    }
    case t.USER_LOGIN_SUCCESS:{
      return {...state, ...action.user}
    }
    case t.USER_LOGIN_FAIL:{
      console.log(action.error)
    }
    default:
      return { ...state };
  }
};

export default userReducer;
