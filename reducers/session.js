import React from "react";

export const AUTH = {
  LOGIN: "AUTH-LOGIN",
  LOGIN_SUCCESS: "AUTH-LOGIN_SUCCESS",
  TRY_LOGIN: "AUTH-TRY_LOGIN",
  LOGIN_FAILED: "AUTH-LOGIN_FAILED",
  GET_ADMIN: "AUTH-GET_ADMIN",
  LOGOUT: "AUTH-LOGOUT",
  FETCHING_LOGOUT: "AUTH-FETCHING_LOGOUT",
  LOADED_LOGOUT: "AUTH-LOADED_LOGOUT",
};

export const SessionContext = React.createContext({});

const initialState = {
  loaded: false,
  fetching: false,
  loggedIn: false,
  user: {},
  error: {
    status: false,
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_FAILED:
      console.log(action.payload.message)
      return {
        ...state,
        loaded: true,
        fetching: false,
        loggedIn: false,
        error: {
          status: action.payload.errorType !== "noToken",
          message: action.payload.message,
        },
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        loaded: true,
        fetching: false,
        user: action.payload,
        loggedIn: true,
      };
    case AUTH.TRY_LOGIN:
      return {
        ...state,
        fetching: true,
      };
    case AUTH.FETCHING_LOGOUT:
      return {
        ...state,
        fetching: true,
      };
    case AUTH.LOADED_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {}
      };
    default:
      break;
  }
};

const middleware = (dispatch) => (action) => {
  switch (action.type) {
    case AUTH.LOGOUT:
      dispatch({ type: AUTH.FETCHING_LOGOUT });
      fetch("http://localhost:5000/api/auth/logout", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.error) throw new Error(json.message);
          dispatch({ type: AUTH.LOADED_LOGOUT });
        })
        .catch((err) => console.log(err));
      break;
    case AUTH.LOGIN:
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.error) throw new Error(json.message);
          middleware(dispatch)({ type: AUTH.GET_ADMIN, payload: json });
        })
        .catch((err) =>
          dispatch({
            type: AUTH.LOGIN_FAILED,
            payload: { errorType: "credentials", message: err.message },
          })
        );
      break;
    case AUTH.GET_ADMIN:
      dispatch({ type: AUTH.TRY_LOGIN });
      fetch("http://localhost:5000/api/auth/user", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.error) throw new Error(user.message);
          dispatch({ type: AUTH.LOGIN_SUCCESS, payload: user });
        })
        .catch((err) =>
          dispatch({
            type: AUTH.LOGIN_FAILED,
            payload: { errorType: "noToken" },
          })
        );
      break;
    default:
      dispatch(action);
      break;
  }
};

const SessionProvider = ({ children }) => {
  const [session, dispatch] = React.useReducer(reducer, initialState);
  const _dispatch = middleware(dispatch);
  return (
    <SessionContext.Provider value={[session, _dispatch]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
