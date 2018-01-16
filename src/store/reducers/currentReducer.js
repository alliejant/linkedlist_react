import * as t from "../actions/constants";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
}

const currentReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case t.SET_CURRENT_USER:
      return {
        isAuthenticated: !!(Object.keys(action.user).length),
        user: action.user
      }
    default:
      return { ...state };
  }
};

export default currentReducer;
