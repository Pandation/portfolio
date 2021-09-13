import React from "react";

export const AdminContext = React.createContext({});

const initialState = {
  loading: true,
  data: undefined,
  headers: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATAS":
      return {
        loading: false,
        headers: action.payload.headers,
        data: action.payload.data,
      };
    case "SHOULD_RELOAD_TRUE":
      return { ...state, loading: true };
    case "SHOULD_RELOAD_FALSE":
      return { ...state, loading: false };
  }
};

const middleware = (dispatch) => (action) => {
  switch (action.type) {
    case "DELETE":
      let deletedEnd = false;
      while (!deletedEnd) {
        fetch(
          `http://localhost:5000/api/portfolio/experience/${action.payload}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((json) => {
            deletedEnd = true;
          });
      }
      dispatch({ type: "SHOULD_RELOAD_TRUE" });
      break;
    default:
      dispatch(action);
      break;
  }
};
const AdminProvider = ({ children }) => {
  const [session, dispatch] = React.useReducer(reducer, initialState);
  const newDispatch = middleware(dispatch);
  return (
    <AdminContext.Provider value={[session, newDispatch]}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
