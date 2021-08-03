import React from "react";
import Sticky from "react-sticky-el";
import { langageCtx } from "../pages/_app";
import { colors } from "../styles/theme";
import {Content} from "../content"

const NavBar = () => {
  const [state, setState] = React.useContext(langageCtx);

  return (
    <>
      <Sticky stickyStyle={{ zIndex: 300 }}>
        <nav>
          <div className="languages">
            <img
              className={state === "fr" && "active"}
              onClick={() => setState("fr")}
              src="./france.svg"
              alt="french flag"
              style={{ height: 30 }}
            />
            <img
              className={state === "en" && "active"}
              onClick={() => setState("en")}
              src="./united-kingdom.png"
              alt="english flag"
              style={{ height: 30 }}
            />
          </div>
          <ul>
            <li>
              <a href="#about">{Content[state].layout.menu.about}</a>
            </li>
            <li>
              <a href="#skills">{Content[state].layout.menu.skills}</a>
            </li>
            <li>
              <a href="#portfolio">{Content[state].layout.menu.portfolio}</a>
            </li>
            <li>
              <a href="#contact">{Content[state].layout.menu.contact}</a>
            </li>
          </ul>
        </nav>
      </Sticky>
      <style jsx>{`
        :root {
          box-sizing: border-box;
        }
        .active {
          border-bottom: solid 2px ${colors.primary};
        }
        .languages {
          color: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 10px;
          padding: 20px;
          > img:hover {
            cursor: pointer;
          }
        }
        nav {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-image: linear-gradient(to bottom, black 60%, transparent);
          > ul {
            margin: 15px;
            list-style-type: none;
            display: flex;
            @media all and (max-width:450px) {
              display: none;
            }
            > li {
              margin: 10px;
              color: #eee;
              font-size: large;
            }
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;
