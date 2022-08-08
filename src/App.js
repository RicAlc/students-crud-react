import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './routes/AddStudent';
import EditStudent from './routes/EditStudent';
import ShowTable from './routes/ShowTable';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ShowTable />} />
        <Route path='/edit/:id' element={<EditStudent />} />
        <Route path='add-student' element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
