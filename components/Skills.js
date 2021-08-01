import React from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [index, setIndex] = React.useState(0);
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
          <div className="tabmenu"></div>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: rgb(17, 17, 17);
          color: rgb(173, 173, 173);
          height: 90vh;
          font-size: clamp(10px, 5vw, 20px);
          display: flex;
          align-items: center;
          justify-content: center;
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
      `}</style>
    </>
  );
};

export default AboutMe;
