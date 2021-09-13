import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AdminContext } from "../../reducers/admin";

const TableHeader = ({ headers }) => {
  return (
    <>
      <thead>
        <tr>
          {headers?.length &&
            headers.map((header) => {
              if (header != "_id" && header != "__v")
                return <th key={header}>{header.toUpperCase()}</th>;
            })}
          <th>EDIT/DEL</th>
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
            color: #202020;
            background: #e7b93b;
          }

          thead th:nth-child(odd) {
            color: #ffffff;
            background: #8434b3;
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

const TableDefinition = ({ children }) => {
  return (
    <>
      <td>{children}</td>
      <style jsx>{`
        td {
          text-align: center;
          font-weight: bold;
          border-right: 1px solid #f8f8f8;
          font-size: 18px;
          padding: 10px 0;
        }
        @media (max-width: 767px) {
          td {
            padding: 15px 0.625em 0.625em 0.625em;
            height: 60px;
            vertical-align: middle;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto;
            width: 120px;
            font-size: 13px;
            text-overflow: ellipsis;
            display: block;
            text-align: center;
          }
          td:nth-child(odd) {
            background: #f8f8f8;
            border-right: 1px solid #e6e4e4;
          }
          td:nth-child(even) {
            border-right: 1px solid #e6e4e4;
          }
        }
      `}</style>
    </>
  );
};
const TableRow = ({ row, index }) => {
  const [_, dispatch] = useContext(AdminContext);
  const tds = [];
  for (let key in row) {
    if (key != "_id" && key != "__v")
      tds.push(
        <TableDefinition key={`${key}_${index}`}>{row[key]}</TableDefinition>
      );
  }
  return (
    <>
      <tr>
        {tds}
        <TableDefinition>
          <span onClick={() => dispatch({type : "DELETE", payload : row._id})}>
            <FaTrash />
          </span>
        </TableDefinition>
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
          tr:nth-child(even) {
            background: #dad9d9;
          }

          @media (max-width: 767px) {
            tr {
              display: table-cell;
            }
            tr:nth-child(odd) {
              background: none;
            }
            tr:nth-child(even) {
              background: transparent;
            }
          }
        `}
      </style>
    </>
  );
};
export default function Table({ headers, data }) {
  return (
    <>
      <div className="table-wrapper">
        <table className="fl-table">
          <TableHeader headers={headers} />
          <tbody>
            {data?.en?.length > 0 &&
              data.en.map((item, index) => (
                <TableRow
                  key={`${item.jobTitle.trim()}_${index}_en`}
                  index={index}
                  row={item}
                />
              ))}
            {data?.fr?.length > 0 &&
              data.fr.map((item, index) => (
                <TableRow
                  key={`${item.jobTitle.trim()}_${index}_fr`}
                  index={index}
                  row={item}
                />
              ))}
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
          tbody {
            display: block;
          }

          tbody {
            width: auto;
            position: relative;
            overflow-x: auto;
          }
        }
      `}</style>
    </>
  );
}
