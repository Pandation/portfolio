import React from "react";

export const SessionContext = React.createContext({});
const initialState = {
  auth: false,
  user: {},
  message: "",
};

//TO FINISH

// const token = localStorage.getItem('id_token');
// jwt.verify(token, 'shhhhh', function(err, decoded) {
//   if (err) {
//     /*
//       err = {
//         name: 'TokenExpiredError',
//         message: 'jwt expired',
//         expiredAt: 1408621000
//       }
//     */
//   }
// });
const init = (initialState) => {
  if (typeof window != "undefined" && window.localStorage) {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

      let state = initialState;
      fetch("http://localhost:5000/api/auth/refresh", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} ${refreshToken}`,
        },
      })
        .then((res) => {
          if (res.ok && res.status == 200) return res.json();
        })
        .then((json) => {
          console.log("json", json);
          // json ?? (state = {...state, user: json})
        });
      console.log("new state ", state);
      return state;
    }
    return initialState;
  }
  return initialState;
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("refreshToken", JSON.stringify(action.payload.refreshToken));
      return { ...state, auth: true, user: action.payload };
    case "LOGOUT":
      return { ...state, auth: false, user: {} };
    default:
      return state;
  }
};

const SessionProvider = ({ children }) => {
  const [session, dispatch] = React.useReducer(reducer, initialState);
  return (
    <SessionContext.Provider value={[session, dispatch]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
