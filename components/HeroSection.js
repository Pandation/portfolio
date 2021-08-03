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
        }
        .heroInfos {
          color: white;
          font-size: 60px;
          font-weight: bold;
          > p {
            margin: 5px;
            &.intro {
              font-size: 25px;
              color: #bbb;
            }
          }
        }
        .heroImg {
          position: relative;
          margin: 45px;
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
          }
          > img {
            max-height: 500px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
