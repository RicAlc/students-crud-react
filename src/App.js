import React, { useEffect, useState } from 'react';
import getAllStudents from './functions/services';

function App() {
  const [dataDB, setDataDB] = useState(null);
  useEffect(() => {
    getAllStudents(setDataDB);
  }, []);

  function setPageContent(data) {
    if (data) {
      const studentsMapped = data.data.map((item) => (
        <div key={item.idST}>{item.nameST}</div>
      ));
      return (
        <>
          <h1>Estudiantes</h1>
          {studentsMapped}
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
