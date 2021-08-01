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
      <section id="about" ref={ref}>
        <div className={`container ${inView && "visible"}`}>
          <div className="svgPix">
            <img src="./web-development.svg" alt="picture of a programmer" />
          </div>
          <div className="aboutContainer">
            <h1>About Me</h1>
            <div className="tabmenu">
              <nav>
                <ul>
                  <li
                    className={index === 0 && "active"}
                    onClick={() => setIndex(0)}
                  >
                    Myself
                  </li>
                  <li
                    className={index === 1 && "active"}
                    onClick={() => setIndex(1)}
                  >
                    Experience
                  </li>
                  <li
                    className={index === 2 && "active"}
                    onClick={() => setIndex(2)}
                  >
                    Education & Certifications
                  </li>
                </ul>
              </nav>
              <div className="contentContainer">
                {index === 0 && (
                  <div>
                    <p>
                      I'm a young student who wants to be a very competent
                      fullstack developer! <br />
                      <br />
                      I'm just a "solving problem lover", that's why. To be
                      rational and logical is my creed and I see myself just
                      like my code : I can always improve myself and I will!
                    </p>
                    <p>
                      Plus, I really enjoy working in a team and sharing ideas.
                      <br />
                      <br />
                      In my experience, learning from each others points of view
                      is a really great way to improve social and technical
                      skills faster and better!
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <div>
                    <ul>
                      <li>
                        1 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        2 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        3 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        4 Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquam, ad?
                      </li>
                    </ul>
                  </div>
                )}
                {index === 2 && (
                  <div>
                    <ul>
                      <li>
                        1 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        2 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        3 Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        4 Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquam, ad?
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
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
            width: 1280px;
            height: 80%;
            justify-content: space-between;
            align-items: flex-start;
            gap: 25px;
            > div {
              flex: 1;
              > h1 {
                font-size: 55px;
                color: white;
              }
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

export default AboutMe;
