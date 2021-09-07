import { useRouter } from "next/router";
import React from "react";
import { SessionContext } from "../reducers/session";
import {colors} from "../styles/theme"
import Sidebar from "../components/admin/Sidebar"
import ViewContainer from "../components/admin/ViewContainer"

const AdminPage = () => {
  const [session, dispatch] = React.useContext(SessionContext);
  const router = useRouter();
  React.useEffect(() => {
    if (!session.auth || session.user == {}) router.push("/login");
  }, [session]);

  const Logout = () => {
      dispatch({ type: "LOGOUT" })
    }
  return (
    <>
      {session.auth && (
        <div className="adminArea">
            <header>ADMIN AREA - Welcome {session.user.username}!<button onClick={Logout}>Logout</button></header>
         <main>
            <Sidebar />
            <ViewContainer/>
         </main>
          
        </div>
      )}
      <style jsx>{`
        .adminArea {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
        }
        header {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4em;
            font-weight: bold;
            color:  white;
            background-image: linear-gradient(to bottom right, rgb(77, 6, 105),${colors.primary});
        }
        main{
            flex: 1;
            display : flex;
        }
      `}</style>
    </>
  );
};

export default AdminPage;
