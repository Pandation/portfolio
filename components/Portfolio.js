import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard"
import * as Content from "../content"

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
          <div className="grid">
            {Content["en"].projects.map((project, index) => {
              return (<ProjectCard project={project} />);
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: rgb(12, 12, 12);
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
          margin: 100px auto;
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
