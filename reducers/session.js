import React from "react";

export const SessionContext = React.createContext({});

const init = () => {
  //code
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, auth: true, user: action.payload };
      case "LOGOUT":
      return { ...state, auth: false, user: {} };
    default:
      return state;
  }
};

const SessionProvider = ({ children }) => {
  const [session, dispatch] = React.useReducer(
    reducer,
    { auth: false, user : {}, message: "" }
  );
  return (
    <SessionContext.Provider value={[session, dispatch]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
