import { useRouter } from "next/router";
import React from "react";
import { SessionContext } from "../reducers/session";
import { colors } from "../styles/theme";
import ViewContainer from "../components/admin/views/ViewContainer";
import {
  Sidebar,
  SidebarSection,
  SidebarItem,
  SidebarHeader,
} from "../components/admin/sidebar";
import {
  FaBlackTie,
  FaBuffer,
  FaCodepen,
  FaGrinBeam,
  FaWpforms,
} from "react-icons/fa";
import Home from "../components/admin/views/Home";
import Education from "../components/admin/views/Education";
import Experience from "../components/admin/views/Experience";
import Learnings from "../components/admin/views/Learnings";
import Projects from "../components/admin/views/Projects";
import Skills from "../components/admin/views/Skills";


const AdminPage = () => {
  const [session, dispatch] = React.useContext(SessionContext);
  const [viewChild, setViewChild] = React.useState("");
  const router = useRouter();

  
const config = {
  menuItem: [
    {
      title: "Experience",
      icon: <FaBlackTie />,
      child: <Experience setViewChild={setViewChild} />,
    },
    {
      title: "Educations",
      icon: <FaWpforms />,
      child: <Education setViewChild={setViewChild} />,
    },
    {
      title: "Skills",
      icon: <FaBuffer />,
      child: <Skills setViewChild={setViewChild} />,
    },
    {
      title: "Projects",
      icon: <FaCodepen />,
      child: <Projects setViewChild={setViewChild} />,
    },
    {
      title: "Learnings",
      icon: <FaGrinBeam />,
      child: <Learnings setViewChild={setViewChild}/>,
    },
  ],
};

  React.useEffect(() => {
    if (!session.auth || session.user == {}) router.push("/login");
  }, [session]);

  const Logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {session.auth && (
        <div className="adminArea">
          <Sidebar>
            <SidebarHeader setViewChild={setViewChild} child={<Home />} />
            <SidebarSection
              setViewChild={setViewChild}
              child={<Home />}
              title="Mon Portfolio"
            >
              {config.menuItem.map((item) => (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  child={item.child}
                  setViewChild={setViewChild}
                  icon={item.icon}
                />
              ))}
            </SidebarSection>
          </Sidebar>
          <main>
            <header>
              ADMIN AREA - Welcome {session.user.username}!
              <button onClick={Logout}>Logout</button>
            </header>
            <ViewContainer viewChild={viewChild} />
          </main>
        </div>
      )}
      <style jsx>{`
        .adminArea {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: stretch;
        }
        header {
          height: 75px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1.4em;
          font-weight: bold;
          color: white;
          background-image: linear-gradient(
            to bottom right,
            rgb(77, 6, 105),
            ${colors.primary}
          );
          > button {
          }
        }
        main {
          flex: 9;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default AdminPage;
