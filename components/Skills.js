import React from "react";
import { useInView } from "react-intersection-observer";
import { colors } from "../styles/theme";
import { Content } from "../content";
import { langageCtx } from "../pages/_app";

const SkillCard = ({ icon, title, children }) => {
  return (
    <>
      <div className="card">
        <div className="bgDark">
          <div className="cardContainer">
            <div className="skillPicture">{icon}</div>
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
          height: 350px;
          width: 350px;
          transition: transform 0.2s linear, background-image 0.3s linear;
          @media all and (max-width:450px) {
            width: 100%;
            height: auto;
            margin-top: 15px;
          }
          &:hover {
            transform: scale(1.05);
            > .bgDark {
              background-color: rgba(0, 0, 0, 0);
              p {
                color: white;
              }
              .skillPicture {
                color: black;
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
            width: 80%;
            @media all and (max-width: 450px) {
              padding: 15px 0;
              text-align: justify;
            }
          }
        }
        .skillPicture {
          flex: 1;
          font-size: 2.2em;
          transition: color 0.3s linear;
          color: ${colors.primary};
        }
        .skillTitle {
          font-weight: 500;
          flex: 1;
          color: white;
        }
        .skillInfos {
          transition: color 0.1s linear;
          flex: 2;
          font-size: 0.9em;
          color: rgb(173, 173, 173);
        }
      `}</style>
    </>
  );
};

const Skills = () => {
  const [state] = React.useContext(langageCtx);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section id="skills" ref={ref}>
        <div className={`container ${inView && "visible"}`}>
          <h1>{Content[state].layout.menu.skills}</h1>
          <div className="grid">
            {Content[state].skills.map((item) => {
              return (
                <SkillCard key={item.title} icon={item.icon} title={item.title}>
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
          overflow: hidden;
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
            overflow: hidden;
          }
        }
        h1 {
          font-size: 2.6em;
          color: white;
          margin: 50px auto;
        }
        .grid {
          gap: 25px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(auto, 1fr);
          @media all and (max-width: 450px) {
            grid-template-columns: 95%;
            justify-content: center;
            gap:0;
            }
        }
      `}</style>
    </>
  );
};

export default Skills;
