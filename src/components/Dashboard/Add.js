import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [todo, setTodo] = useState('');


  const handleAdd = e => {
    e.preventDefault();

    if (!todo) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      todo,     
    };

    employees.unshift(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${todo}' data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add into List</h1>
        <label htmlFor="todo">Todo Name</label>
        <input
          id="todo"
          type="text"
          name="todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
    
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
