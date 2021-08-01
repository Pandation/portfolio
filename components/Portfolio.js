import React from "react";
import { useInView } from "react-intersection-observer";
import {colors } from "../styles/theme"
import CardAlt from './CardAlt'



const config = {
  en: {
    skills: [
      {
        title: "HTML5",
        paragraph: "Et oui je fais du HTML 5 :D",
        logoUrl: "./france.svg",
      },
      {
        title: "CSS3",
        paragraph: "Et oui jeqsdqdqzdML 5 :D",
        logoUrl: "./france.svg",
      },
      {
        title: "React.js",
        paragraph: "qsfkqufgiqudgidq:D",
        logoUrl: "./france.svg",
      },
      {
        title: "Next.js",
        paragraph: "Lorem ipsum dolor e consectitur :D",
        logoUrl: "./france.svg",
      },
    ],
    projects: [
      {
        title: "Ostéomag",
        paragraph : "Blablab blablalbalvlsd",
        url : "https://osteo.vercel.app",
        backgroundImg: "./screen_osteo.png",
        date : "En développement",
      }
    ]
  },
};

const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section id="portfolio" ref={ref}>
        <div className={`container ${inView && "visible"}`}>
          <h1>Portfolio</h1>
          <p></p>
          <div className="grid">
            {config.en.projects.map((project) => {
              return <CardAlt project={project} key={project.title} />
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
            transform: translateX(-100%);
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

export default Portfolio;
