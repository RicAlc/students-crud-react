import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import StudentsTable from '../components/StudentsTable';
import { getAllStudents } from '../functions/services';

export default function ShowTable() {
  const [dataDB, setDataDB] = useState(null);
  useEffect(() => {
    getAllStudents(setDataDB);
  }, []);

  function setPageContent(data) {
    if (data) {
      return <StudentsTable data={data} />;
    } else {
      return <h1>Cargando</h1>;
    }
  }
  return (
    <>
      <h2 className='text-light'>Lista de alumnos</h2>
      <div className='container bg-light rounded p-3'>
        <h2>Estudiantes registrados</h2>
        {setPageContent(dataDB)}
        <Button href='/add-student' size='lg'>
          Añadir estudiante
        </Button>
      </div>
    </>
  );
}
