import React from "react";
import { Button } from "react-bootstrap";

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Todo Name</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((item, i) => (
              <tr
                key={item.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                style={{
                  border: i % 2 == 0 ? "1px solid #fef1f1" : "1px solid #fff",
                  background: i % 2 == 0 ? "#fef1f1" : "#fff",
                }}
              >
                <td>{i + 1}</td>
                <td>{item.todo}</td>
                <td className="text-right">
                  <Button
                    variant="success"
                    className="theme-btn-primary1"
                    onClick={() => handleEdit(item.id)}
                    autoFocus
                  >
                    Edit
                  </Button>
                </td>
                <td className="text-left">
                  <Button
                    variant="danger"
                    // className="theme-btn-primary1"
                    onClick={() => handleDelete(item.id)}
                    autoFocus
                  >
                    Delete
                  </Button>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
