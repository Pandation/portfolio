import React from "react";
import Sticky from "react-sticky-el";

const NavBar = () => {
  return (
    <>
      <Sticky stickyStyle={{ zIndex: 300 }}>
        <nav>
          <div className="languages">
            <img src="./france.svg" alt="french flag" style={{ height: 30 }} />
            <img
              src="./united-kingdom.png"
              alt="english flag"
              style={{ height: 30 }}
            />
          </div>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">My Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </nav>
      </Sticky>
      <style jsx>{`
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
