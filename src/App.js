import React, { useEffect, useState } from 'react';
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from './functions/services';

function App() {
  const [dataDB, setDataDB] = useState(null);
  const [student, setStudent] = useState(null);
  useEffect(() => {
    getStudent(1, setStudent);
  }, []);
  useEffect(() => {
    getAllStudents(setDataDB);
  }, []);
  const addStudent = () => {
    createStudent('Anotnio', 'Cruz', true);
  };
  const removeStudent = () => {
    deleteStudent(5);
  };
  const editStudent = () => {
    updateStudent(3, 'Ivan', 'Solar', false);
    return true;
  };
  function findStudent() {
    console.log(student.data[0].nameST);
  }

  function setPageContent(data) {
    if (data) {
      const studentsMapped = data.data.map((item) => (
        <div key={item.idST}>{item.nameST}</div>
      ));
      return (
        <>
          <h1>Estudiantes</h1>
          {studentsMapped}
          <button onClick={addStudent} className='add'>
            Add student
          </button>
          <button onClick={removeStudent} className='delete'>
            Delete student
          </button>
          <button onClick={editStudent} className='update'>
            Edit student
          </button>
          <button onClick={findStudent}>Single student</button>
        </>
      );
    } else {
      return <h1>Cargando</h1>;
    }
  }

  return (
    <div className='App'>
      <h1>CRUD with MySQ, Express, Node, React</h1>
      {setPageContent(dataDB)}
    </div>
  );
}

export default App;
