import React from "react";
import AnimatedText from "../components/AnimatedText";
import { colors } from "../styles/theme.js";
import { Content } from "../content";
import { langageCtx } from "../pages/_app";

const HeroSection = () => {
  const [state] = React.useContext(langageCtx);
  return (
    <>
      <div className="container">
        <div className="heroInfos">
          <p className="intro">{Content[state].layout.heroSection.creed}</p>
          <p>{Content[state].layout.heroSection.firstLine}</p>
          <AnimatedText
            primaryText={Content[state].layout.heroSection.middle}
            color={colors.primary}
          >
            {Content[state].layout.stacks}
          </AnimatedText>
          <p>{Content[state].layout.heroSection.secondLine}</p>
        </div>
        <div className="heroImg">
          <img src="./circle-cropped.png" alt="Me" />
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          @media all and (max-width:450px) {
            flex-direction: column;
          }
        }
        .heroInfos {
          color: white;
          font-size: 60px;
          font-weight: bold;
          @media all and (max-width: 450px) {
            font-size: 18px;
          }
          > p {
            margin: 5px;
            @media all and (max-width: 450px) {
              margin: 0;
            }
            &.intro {
              font-size: 25px;
              color: #bbb;
              @media all and (max-width: 450px) {
                font-size: 15px;
              }
            }
          }
        }
        .heroImg {
          position: relative;
          margin: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            border-radius: 50%;
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 2;
            background-image: radial-gradient(
              transparent,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.8)
            );
            @media all and (max-width:450px) {
            width: 80%;
          }
          }
          > img {
            max-height: 500px;
            @media all and (max-width:450px) {
            max-width: 80%;
          }
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
