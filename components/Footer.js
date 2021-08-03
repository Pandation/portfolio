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
          <address>
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
          </address>

          <div>
            <div className="icon icon--big">
              <a
                href="https://www.linkedin.com/in/florian-baumes-775b80184/"
                target="_blank"
              >
                {" "}
                <AiOutlineLinkedin />
              </a>
            </div>
            <div className="icon icon--big">
              <a href="https://github.com/Pandation" target="_blank">
                {" "}
                <AiOutlineGithub className="icon" />{" "}
              </a>
            </div>
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
          @media all and (max-width: 450px) {
            height: auto;
          }
          > .container {
            display: flex;
            width: 1280px;
            justify-content: space-between;
            align-items: center;
            gap: 25px;
            @media all and (max-width: 450px) {
              flex-direction: column;
              width: 100%;
            }
            > address {
              @media all and (max-width: 450px) {
                flex-direction: column;
                width: 100%;
              }
            }
            > div,
            address {
              display: flex;
              align-items: center;
              justify-content: space-around;
              flex: 1;
              transition: transform 0.1s linear;
              > div {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        .icon {
          font-size: 2em;
          position: relative;
          margin-right: 5px;
          &--big {
            &:hover {
              transform: scale(1.1);
              cursor: pointer;
            }
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
