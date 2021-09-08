import React from "react";
import Table from "../Table";
import ExperienceForm from "../forms/ExperienceForm";

const ExperienceView = ({setViewChild}) => {
  return (
    <div className="container">
    <div className='title'><h2>Experience</h2><span onClick={()=>setViewChild(<ExperienceForm/>)}>Add</span></div>
    <Table data headers/>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      .title {
        background: white;
        font-size: 1.7em;
        display: flex;
        justify-content: center;
        position: relative;
        
        > span {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%);
          height: 40px;
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          font-size: 0.7em;
          padding: 15px;
          font-weight: bold;
          background-color: black;
          color: gold;
          transition: transform .2s linear;
          &:hover {
            transform:  translateY(-50%) scale(1.1);
            cursor: pointer;
          }
        }
      }
    `}</style>
    </div>
  );
};

export default ExperienceView;
