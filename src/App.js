import React, { useEffect, useState } from 'react';
import StudentsTable from './components/StudentsTable';
import { getAllStudents } from './functions/services';

function App() {
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
    <div className='App'>
      <h1>CRUD with MySQ, Express, Node, React</h1>
      {setPageContent(dataDB)}
    </div>
  );
}

export default App;
