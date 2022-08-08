import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import StudentsTable from '../components/StudentsTable';
import { getAllStudents } from '../functions/services';

export default function ShowTable() {
  const [dataDB, setDataDB] = useState(null);
  const navigate = useNavigate();
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
      <h1>CRUD with MySQ, Express, Node, React</h1>
      {setPageContent(dataDB)}
      <Button
        text='Nuevo estudiante'
        className='add-student'
        onClick={() => navigate('/add-student')}
      />
    </>
  );
}
