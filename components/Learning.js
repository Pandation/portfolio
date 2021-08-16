import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Content } from "../content";
import { langageCtx } from "../pages/_app";

const Learning = () => {
  const [state] = React.useContext(langageCtx);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section id="now" ref={ref}>
        <div className={`container ${inView && "visible"}`}>
          <h1>{Content[state].learning.title}</h1>
          <ul>
            {Content[state].learning.subjects.map((subject) => (
              <li key={subject.trim()}><span><FaArrowRight/></span><span>{subject}</span><span><FaArrowLeft/></span></li>
            ))}
          </ul>
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
            transform: translateX(-100%);
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
        ul {
            list-style: none;
            margin: auto;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 10px;
            pointer-events: none;
            > li {
                font-size: 1.3em;
                width: 500px;
                display: flex;
                justify-content: space-between;

            }
        }
      `}</style>
    </>
  );
};

export default Learning;
