import React from "react";
import { useInView } from "react-intersection-observer";
import { colors } from "../styles/theme";
import * as Content from "../content"

const SkillCard = ({ logoSrc, title, children }) => {
  return (
    <>
      <div className="card">
        <div className="bgDark">
          <div className="cardContainer">
            <div className="skillPicture">
              <img src={logoSrc} alt={`${title} logo`} />
            </div>
            <div className="skillTitle">{title}</div>
            <p className="skillInfos">{children}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-image: linear-gradient(
            to right,
            ${colors.primary},
            rgb(132, 0, 255)
          );
          border-radius: 10px;
          height: 300px;
          width: 350px;
          transition: transform 0.2s linear, background-image 0.3s linear;
          &:hover {
            transform: scale(1.05);
            > .bgDark {
              background-color: rgba(0, 0, 0, 0);
              p {
                color: white;
              }
            }
          }
        }
        .bgDark {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(27, 27, 27);
          transition: background-color 0.3s linear;
          > .cardContainer {
            height: 80%;
            width: 80%;
          }
        }
        .skillPicture {
          flex: 3;
          fill: rgb(223, 0, 223);
          > img {
            max-height: 75px;
          }
        }
        .skillTitle {
          font-weight: 500;
          flex: 1;
          color: white;
        }
        .skillInfos {
          transition: color 0.1s linear;
          flex: 2;
          color: rgb(173, 173, 173);
        }
      `}</style>
    </>
  );
};

const Skills = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section id="skills" ref={ref}>
        <div className={`container ${inView && "visible"}`}>
          <h1>My Skills</h1>
          <p>Fullstack, I can create everything you want !</p>
          <div className="grid">
            {Content["en"].skills.map((item) => {
              return (
                <SkillCard
                  key={item.title}
                  logoSrc={item.logoUrl}
                  title={item.title}
                >
                  {item.paragraph}
                </SkillCard>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: rgb(17, 17, 17);
          color: rgb(173, 173, 173);
          font-size: clamp(10px, 5vw, 20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 100px;
          > .container {
            &.visible {
              opacity: 1;
              transform: translateX(0%);
            }
            transition: opacity 0.6s 0.1s linear, transform 0.3s linear;
            opacity: 0;
            transform: translateX(100%);
            display: flex;
            flex-direction: column;
            width: 1280px;
            height: 100%;
            align-items: center;
          }
        }
        h1 {
          font-size: 55px;
          color: white;
          margin: 0;
          margin-top: 50px;
        }
        p {
          margin-bottom: 50px;
        }
        .grid {
          gap: 25px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
        }
      `}</style>
    </>
  );
};

export default Skills;
