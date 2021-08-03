import React from "react";
import { colors } from "../styles/theme";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  
  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="mail">
            <span className="icon">
              {" "}
              <AiOutlineMail className="icon" />
            </span>
            florianbaumes@gmail.com
          </div>
          <div className="tel">
            <span className="icon">
              {" "}
              <AiOutlinePhone className="icon" />
            </span>
            06.95.15.81.66
          </div>

          <div className="icon icon--big">
            <a href="https://www.linkedin.com/in/florian-baumes-775b80184/" target="_blank">
            {" "}
            <AiOutlineLinkedin /></a>
          </div>
          <div className="icon icon--big">
          <a href="https://github.com/Pandation" target="_blank"> {" "}
            <AiOutlineGithub className="icon" /> </a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${colors.primary};
          color: rgb(173, 173, 173);
          font-size: clamp(10px, 5vw, 25px);
          display: flex;
          height: 150px;
          color: white;
          align-items: center;
          justify-content: center;
          > .container {
            display: flex;
            width: 1280px;
            height: 80%;
            justify-content: space-between;
            align-items: center;
            gap: 25px;
            > div {
              display: flex;
              align-items: center;
              transition: transform .1s linear;
              &:hover {
                transform: scale(1.1);
                cursor: pointer;
              }
            }
          }
        }
        .icon {
          font-size: 2em;
          position: relative;
          margin-right: 10px;
          &--big {
            font-size: 3em;
          }
          &:not(.icon--big) {
            top: 6px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
