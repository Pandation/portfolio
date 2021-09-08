import React from "react";

const ViewContainer = ({viewChild}) => {
  return (
    <>
      <div>{viewChild}</div>
      <style jsx>{`
        div {
          flex: 8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
        }
      `}</style>
    </>
  );
};

export default ViewContainer;
