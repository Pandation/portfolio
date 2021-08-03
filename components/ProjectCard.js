import React from "react";
import { colors } from "../styles/theme";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { langageCtx } from "../pages/_app";
import { Content } from "../content";

const FrontCard = ({ title, status, background }) => {
  return (
    <>
      <FrontSide style={{padding : 0}}>
        <div className="container">
          <div className="projectScreenshot">
            <img src={background} alt={`screenshot of ${title}`} />
          </div>
          <div className="resume">
            <h1>{title}</h1>
            <p>{status}</p>
          </div>
        </div>
      </FrontSide>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 10px;
          background-image: linear-gradient(
            to top left,
            rgb(20, 20, 20),
            ${colors.primary}
          );
        }
        .projectScreenshot {
          flex: 2.5;
          > img {
            max-width: 100%;
          }
        }
        .resume {
          flex: 1;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          > h1 {
            margin: 0;
            color: white;
          }
          > p {
            margin: 0;
            color: rgb(200, 200, 200);
          }
        }
      `}</style>
    </>
  );
};

const BackCard = ({ title, stacks , url}) => {
  const [state] = React.useContext(langageCtx)
  return (
    <>
      <BackSide style={{padding : 0}}>
        <div className="container">
          <h1>Stacks</h1>
          <ul>{stacks.map(stack => <li key={stack}>{stack}</li>)}</ul>
          {url!="" && <button><a href={url}>{Content[state].layout.button}</a></button>}
        </div>
      </BackSide>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 15px;
          overflow: hidden;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, rgba(255,255,255,0.2),rgba(255,255,255,0.2)), linear-gradient(
            to top left,
            rgb(20, 20, 20),
            ${colors.primary}
          );;
          border: inset 10px ${colors.primary};
          > h1,
          > h2 {
            text-align: center;
            width: 100%;
            color: white;
          }
          > ul {
            list-style-type: square;
          color: rgb(235, 235, 235);
            > li {
              font-weight: 600;
            }
          }
        }
        button {
          border-radius: 20px;
          border: solid 1px black;
          background-color: black;
          color: white;
          transition: all .2s linear;
          width: fit-content;
          margin: auto;
          padding: 7px;
          font-size: 0.8em;
          font-weight: bold;
          &:hover {
            background-color: ${colors.primary};
          }
        }
      `}</style>
    </>
  );
};
/**
 * @param {object} project Les donnees du projet à afficher
 * @returns {ReactComponentElement} La carte du projet
 */
function CardAlt({ project }) {
  return (
    <>
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{
          width: "auto",
          height: "auto",
          margin: "15px",
          borderRadius: "10px",
        }} /// these are optional style, it is not necessary
      >
        <FrontCard
          title={project.title}
          status={project.status}
          background={project.backgroundImg}
        />
        <BackCard title={project.title} url={project.url} stacks={project.stacks} />
      </Flippy>
      <style jsx>
        {`
          a {
            color: inherit;
          }
          .card {
            --bg-filter-opacity: 0.2;
            background-image: linear-gradient(
                rgba(0, 0, 0, var(--bg-filter-opacity)),
                rgba(0, 0, 0, var(--bg-filter-opacity))
              ),
              var(--bg-img);
            --bg-img: url(${project?.backgroundImg});
            height: 20em;
            width: 15em;
            font-size: 1em;
            color: white;
            border-radius: 1em;
            padding: 1em;
            margin: 2em;
            display: flex;
            align-items: flex-end;
            background-size: cover;
            background-position: center;
            transition: all, 0.5s;
            position: relative;
            overflow: hidden;
            border: 10px solid ${colors.primary};
            text-decoration: none;
          }

          .resume {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* number of lines to show */
            -webkit-box-orient: vertical;
          }
          .card:hover {
            transform: rotate(0);
          }

          .card h1 {
            margin: 0;
            font-size: 1.5em;
            line-height: 1.2em;
          }

          .card p {
            font-size: 0.75em;
            margin-top: 0.5em;
            line-height: 2em;
          }

          .card .tags {
            display: flex;
          }

          .card .tags .tag {
            font-size: 0.75em;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.3rem;
            padding: 0 0.5em;
            margin-right: 0.5em;
            line-height: 1.5em;
            transition: all, 0.5s;
          }

          .card:hover .tags .tag {
            background: ${colors.primary};
            color: white;
          }

          .card .date {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 0.75em;
            padding: 1em;
            line-height: 1em;
            opacity: 0.8;
          }

          .card:before,
          .card:after {
            content: "";
            transform: scale(0);
            transform-origin: top left;
            border-radius: 50%;
            position: absolute;
            left: -50%;
            top: -50%;
            z-index: -5;
            transition: all, 0.5s;
            transition-timing-function: ease-in-out;
          }

          .card:before {
            background: #ddd;
            width: 250%;
            height: 250%;
          }

          .card:after {
            background: white;
            width: 200%;
            height: 200%;
          }

          .card:hover {
            color: ${colors.primary};
          }

          .card:hover:before,
          .card:hover:after {
            transform: scale(1);
          }

          .card-grid-space .num {
            font-size: 3em;
            margin-bottom: 1.2rem;
            margin-left: 1rem;
          }

          .info {
            font-size: 1.2em;
            display: flex;
            padding: 1em 3em;
            height: 3em;
          }

          .info img {
            height: 3em;
            margin-right: 0.5em;
          }

          .info h1 {
            font-size: 1em;
            font-weight: normal;
          }

          /* MEDIA QUERIES */
          @media screen and (max-width: 1285px) {
            .cards-wrapper {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media screen and (max-width: 900px) {
            .cards-wrapper {
              grid-template-columns: 1fr;
            }
            .info {
              justify-content: center;
            }
            .card-grid-space .num {
              margin-left: 0;
              text-align: center;
            }
          }

          @media screen and (max-width: 500px) {
            .cards-wrapper {
              padding: 4rem 2rem;
            }
            .card {
              max-width: calc(100vw - 4rem);
            }
          }

          @media screen and (max-width: 450px) {
            .info {
              display: block;
              text-align: center;
            }
            .info h1 {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default CardAlt;
