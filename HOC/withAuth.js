import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { SessionContext } from "reducers/session";
import { AUTH } from "reducers/session";

const withAuth = (Component) => (props) => {
  const [session, dispatch] = React.useContext(SessionContext);
  const router = useRouter();

  useEffect(() => {
    if (!session.loaded && !session.fetching) {
      dispatch({ type: AUTH.GET_ADMIN });
    }
  }, [session.loaded]);

  useEffect(() => {
    if (session.loaded && !session.loggedIn) {
      router.push("/login");
    }
  }, [session.loaded, session.loggedIn]);

  if (session.fetching) {
    return <div>Loading...</div>;
  }
  console.log("ici")

  return <>{session.loggedIn && <Component {...props} />}</>;
};

export default withAuth;
