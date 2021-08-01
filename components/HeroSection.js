import React from "react";
import AnimatedText from "../components/AnimatedText";
import {colors} from "../styles/theme.js"

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="heroInfos">
          <p className="intro">Everything can be optimized</p>
          <p>Hi, I'm Florian Baumes</p>
          <AnimatedText primaryText="Developer" color={colors.primary}>
            {["React.js", "Next.js", "Express.js", "React Native", "Fullstack"]}
          </AnimatedText>
          <p>based in Montpellier. (France)</p>
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
