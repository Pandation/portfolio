import React from "react";
import Table from "../Table";

const EducationView = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    if (data == {}) {
      const asyncFetch = async () => {
        const dataFetched = await fetch(
          "http://localhost:5000/api/portfolio/experience"
        );
        const result = await dataFetched.json();
        console.log(result);
      };
      asyncFetch();
    }
  }, [data]);
  return (
    <>
      <div>
        <h2>Education</h2>
        <span>Add</span>
      </div>
      <Table data headers />
      <style jsx>{`
        div {
          background: white;
          font-size: 2em;
          height: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          > span {
            position: absolute;
            right: 25px;
            border-radius: 50%;
            background-color: black;
            color: gold;
          }
        }
      `}</style>
    </>
  );
};

export default EducationView;
