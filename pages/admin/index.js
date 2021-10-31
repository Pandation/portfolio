import React from "react";
import {
  FaBlackTie,
  FaBuffer,
  FaCodepen,
  FaGrinBeam,
  FaWpforms,
} from "react-icons/fa";

import { colors } from "@/styles/theme";

import {
  Sidebar,
  SidebarSection,
  SidebarItem,
  SidebarHeader,
} from "@/components/admin/sidebar";
import ViewContainer from "@/components/admin/views/ViewContainer";
import Home from "@/components/admin/views/Home";
import Education from "@/components/admin/views/Education";
import Experience from "@/components/admin/views/Experience";
import Learnings from "@/components/admin/views/Learnings";
import Projects from "@/components/admin/views/Projects";
import Skills from "@/components/admin/views/Skills";

import AdminProvider from "../../reducers/admin";
import { AUTH, SessionContext } from "../../reducers/session";

import withAuth from "../../HOC/withAuth";
const config = {
  menuItem: [
    {
      title: "Experience",
      icon: <FaBlackTie />,
      child: (setViewChild) => <Experience setViewChild={setViewChild} />,
    },
    {
      title: "Educations",
      icon: <FaWpforms />,
      child: (setViewChild) => <Education setViewChild={setViewChild} />,
    },
    {
      title: "Skills",
      icon: <FaBuffer />,
      child: (setViewChild) => <Skills setViewChild={setViewChild} />,
    },
    {
      title: "Projects",
      icon: <FaCodepen />,
      child: (setViewChild) => <Projects setViewChild={setViewChild} />,
    },
    {
      title: "Learnings",
      icon: <FaGrinBeam />,
      child: (setViewChild) => <Learnings setViewChild={setViewChild} />,
    },
  ],
};

const AdminPage = () => {
  const [viewChild, setViewChild] = React.useState("");
  const [session] = React.useContext(SessionContext);

  const logout = () => {
    dispatch({ type: AUTH.LOGOUT });
  };

  return (
    <>
      <AdminProvider>
        {session.loggedIn && (
          <div className="adminArea">
            <Sidebar>
              <SidebarHeader setViewChild={setViewChild} child={<Home />} />
              <SidebarSection
                setViewChild={setViewChild}
                child={<Home />}
                title={"API Node.JS"}
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
                <button onClick={logout}>Logout</button>
              </header>
              <ViewContainer viewChild={viewChild} />
            </main>
          </div>
        )}
      </AdminProvider>
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
          justify-content: flex-end;
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

export default withAuth(AdminPage);
