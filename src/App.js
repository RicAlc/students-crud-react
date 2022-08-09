import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './routes/AddStudent';
import EditStudent from './routes/EditStudent';
import ShowTable from './routes/ShowTable';
import './sass/App.scss';

function App() {
  return (
    <div className='App d-flex flex-column align-items-center p-3'>
      <Routes>
        <Route path='/' element={<ShowTable />} />
        <Route path='/edit/:id' element={<EditStudent />} />
        <Route path='add-student' element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
