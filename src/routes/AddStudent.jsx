import React from 'react';
import AddStudentForm from '../components/AddStudentForm';

export default function AddStudent() {
  return (
    <>
      <h2 className='edit-container__title my-5 text-light'>
        Agregar estudiante
      </h2>
      <AddStudentForm />
    </>
  );
}
