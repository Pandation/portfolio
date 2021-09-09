import React from "react";

export const AdminContext = React.createContext({});

const initialState = {
  loading: true,
  data: undefined,
  headers: undefined
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATAS":
      return {loading: false, headers: action.payload.headers, data: action.payload.data };
    case "RESET":
      return {...initialState};
    default:
      return state;
  }
};

const AdminProvider = ({ children }) => {
  const [session, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AdminContext.Provider value={[session, dispatch]}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
