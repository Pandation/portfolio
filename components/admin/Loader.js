import React from "react";

const LoaderFrame = ({ children, frame, layers, variant }) => {
  let duration = (frame * 1.2) / layers;
  return (
    <>
      <div className="loader">{children}</div>
      <style jsx>{`
        div.loader {
          padding: 2px;
          width: ${(frame * 150) / layers}px;
          height: ${(frame * 150) / layers}px;
          margin: 0 !important;
          box-sizing: border-box;
          border-radius: 50%;
          ${variant && "border-right: solid 7px transparent;"}
          ${variant && "border-bottom: solid 7px transparent;"}
          border-left: solid 8px goldenrod;
          border-top: solid 8px goldenrod;
          animation-name: test;
          animation-duration: ${duration + 0.2}s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          display: flex;
          transform-origin: 50% 50%;
          justify-content: center;
          align-items: center;
          animation-direction: ${frame % 2 === 0 ? "reverse" : "normal"};
        }

        @keyframes test {
          0% {
            transform: rotateZ(0);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
    </>
  );
};
const Loader = ({ frames = 2, variant }) => {
  let loader = <LoaderFrame layers={frames}  variant={variant} frame={1} />;
  for (let i = 0; i < frames - 1; i++) {
    loader = (
      <LoaderFrame layers={frames} variant={variant} frame={i + 2}>
        {loader}
      </LoaderFrame>
    );
  }
  console.log(loader);
  return (
    <>
      <div className="loaderContainer">{loader}</div>
      <style jsx>{`
        div.loaderContainer {
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 150px;
        }
      `}</style>
    </>
  );
};

export default Loader;
