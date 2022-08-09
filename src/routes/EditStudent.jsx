import React from 'react';
import EditStudentForm from '../components/EditStudentForm';

export default function EditStudent() {
  return (
    <>
      <h2 className='edit-container__title my-5  text-light'>
        Editar estudiante
      </h2>
      <EditStudentForm />
    </>
  );
}
