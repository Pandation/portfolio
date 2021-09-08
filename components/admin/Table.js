import React from "react";

const TableHeader = ({ data }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 4</th>
          <th>Header 5</th>
        </tr>
      </thead>
      <style jsx>
        {`
          * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
          }
          body {
            font-family: Helvetica;
            -webkit-font-smoothing: antialiased;
            background: rgba(71, 147, 227, 1);
          }

          th {
            text-align: center;
            padding: 15px;
            font-size: 18px;
          }

          thead th {
            color: #ffffff;
            background: #c5940e;
          }

          thead th:nth-child(odd) {
            color: #ffffff;
            background: #3d1653;
          }

          tr:nth-child(even) {
            background: #c8c8c8;
          }

          @media (max-width: 767px) {
            thead,
            thead th {
              display: block;
            }
            thead th:last-child {
              border-bottom: none;
            }
            thead {
              float: left;
            }

            th {
              padding: 20px 0.625em 0.625em 0.625em;
              height: 60px;
              vertical-align: middle;
              box-sizing: border-box;
              overflow-x: hidden;
              overflow-y: auto;
              width: 120px;
              font-size: 13px;
              text-overflow: ellipsis;
            }
            thead th {
              text-align: left;
              border-bottom: 1px solid #f7f7f9;
            }

          }
        `}
      </style>
    </>
  );
};
const TableRow = ({ data }) => {
  return (
    <>
      <tr>
        <td>Content 1</td>
        <td>Content 1</td>
        <td>Content 1</td>
        <td>Content 1</td>
        <td>Content 1</td>
      </tr>
      <style jsx>
        {`
          * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
          }
          body {
            font-family: Helvetica;
            -webkit-font-smoothing: antialiased;
            background: rgba(71, 147, 227, 1);
          }
          td {
            text-align: center;
            padding: 15px;
            font-weight: bold;
            border-right: 1px solid #f8f8f8;
            font-size: 18px;
          }

          tr:nth-child(even) {
            background: #dad9d9;
          }

          @media (max-width: 767px) {
            tbody {
              display: block;
            }

            tbody {
              width: auto;
              position: relative;
              overflow-x: auto;
            }
            td {
              padding: 20px 0.625em 0.625em 0.625em;
              height: 60px;
              vertical-align: middle;
              box-sizing: border-box;
              overflow-x: hidden;
              overflow-y: auto;
              width: 120px;
              font-size: 13px;
              text-overflow: ellipsis;
            }

            tbody tr {
              display: table-cell;
            }
            tbody tr:nth-child(odd) {
              background: none;
            }
            tr:nth-child(even) {
              background: transparent;
            }
            tr td:nth-child(odd) {
              background: #f8f8f8;
              border-right: 1px solid #e6e4e4;
            }
            tr td:nth-child(even) {
              border-right: 1px solid #e6e4e4;
            }
            tbody td {
              display: block;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};
const Table = ({ headers, data }) => {
  return (
    <>
      <div className="table-wrapper">
        <table className="fl-table">
          <TableHeader />
          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
      <style jsx>{`
        /* Table Styles */

        .table-wrapper {
          margin: auto;
          width: calc(100% - 150px);
          box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
        }

        .fl-table {
          border-radius: 5px;
          font-size: 15px;
          font-weight: normal;
          border: none;
          border-collapse: collapse;
          width: 100%;
          max-width: 100%;
          white-space: nowrap;
          background-color: white;
        }

        @media (max-width: 767px) {
          .fl-table {
            display: block;
            width: 100%;
          }
          .table-wrapper:before {
            content: "Scroll horizontally >";
            display: block;
            text-align: right;
            font-size: 11px;
            color: white;
            padding: 0 0 10px;
          }
        
        }
      `}</style>
    </>
  );
};

export default Table;
