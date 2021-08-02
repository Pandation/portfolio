import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: rgb(17, 17, 17);
          color: rgb(173, 173, 173);
          height: 90vh;
          font-size: clamp(10px, 5vw, 20px);
          display: flex;
          align-items: center;
          justify-content: center;
          > .container {
            display: flex;
            width: 1280px;
            height: 80%;
            justify-content: space-between;
            align-items: flex-start;
            gap: 25px;
            > h1 {
              font-size: 55px;
              color: white;
            }
            > .svgPix {
              display: flex;
              justify-content: center;
              align-items: center;
              > img {
                box-sizing: border-box;
                padding: 25px;
                border: inset 4px rgb(223, 0, 223);
                border-radius: 5px;
                max-height: 550px;
              }
            }
          }
        }
        .contentContainer {
          width: 100%;
          > div {
            width: 100%;
          }
          ul {
            > li {
              margin: 10px auto;
            }
          }
        }
        nav > ul {
          padding-bottom: 25px;
          display: flex;
          list-style: none;
          justify-content: space-around;
          > li {
            margin: 0 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            height: 35px;
            color: white;
            font-weight: bold;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              transform-origin: center;
              width: 20%;
              height: 10px;
              border-bottom: solid 3px white;
              transition: width 0.2s linear;
            }
            &.active {
              color: rgb(223, 0, 223);
              &::after {
                width: 100%;
                height: 10px;
                transform-origin: top left;
                border-color: rgb(223, 0, 223);
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
