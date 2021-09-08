import React from "react";
import { colors } from "../../../styles/theme";

export const Sidebar = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          flex: 2;
          max-width: 300px;
          background-color: rgb(42, 42, 42);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 25px;
        }
      `}</style>
    </>
  );
};
export const SidebarHeader = ({ setViewChild, child }) => {
  return (<>
    <div
      onClick={() => setViewChild(child)}
    >
      PandAdmin
    </div><style jsx>{`
    div {
        margin-bottom: 50px;
        width: 110px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: inset 3px ${colors.primary};
        font-size: 2.5em;
        color: gold;
        font-weight: bold;
        &:hover {
          cursor : pointer;
        }
      }
      
      `}</style></>
  );
};
export const SidebarSection = ({ title, children, setViewChild, child }) => {
  return (
    <>
      <div>
        <h2 onClick={() => setViewChild(child)}>{title}</h2>
        {children}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          > h2 {
            font-size: 22px;
            color: ${colors.textGray};
            border-bottom: solid 2px gold;
            &:hover {
              cursor: pointer;
            }
          }
        }
      `}</style>
    </>
  );
};
export const SidebarItem = ({ child, setViewChild, icon, title }) => {
  return (
    <>
      <div onClick={() => setViewChild(child)}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <style jsx>{`
        div {
          font-size: 1.3em;
          margin: 10px 0;
          > span {
            margin: 0 5px;
            &:first-child {
              font-size: 1.2em;
              position: relative;
              top: 5px;
            }
          }
          &:hover {
            color: gold;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
