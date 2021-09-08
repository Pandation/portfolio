import React from 'react'
import Table from '../Table'

const EducationView = () => {
    return (
        <>
      <div><h2>Education</h2><span>Add</span></div>
      <Table data headers/>
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
    )
}

export default EducationView
