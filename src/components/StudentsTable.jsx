import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../functions/services';
import Button from './Button';

export default function StudentsTable({ data }) {
  const navigate = useNavigate();

  const studentsList = data.data.map((item) => (
    <tr className='students-table__row' key={item.idST}>
      <td className='students-table__id'>{item.idST}</td>
      <td className='students-table__name'>{item.nameST}</td>
      <td className='students-table__last-name'>{item.lastNameST}</td>
      <td className='students-table__acitve'>{item.activeST ? 'Sí' : 'No'}</td>
      <td className='students-table__buttons'>
        <Button
          text='Editar'
          className='edit'
          onClick={() => navigate(`/edit/${item.idST}`)}
        />
        <Button
          text='Eliminar'
          className='delete'
          onClick={() => deleteStudent(item.idST)}
        />
      </td>
    </tr>
  ));
  const tableValues = (
    <tr>
      <td>ID</td>
      <td>Nombre</td>
      <td>Apellido</td>
      <td>Cursando</td>
      <td>Acciones</td>
    </tr>
  );
  return (
    <table className='students-table'>
      <thead>
        <tr>
          <th colSpan='5'>Estudiantes</th>
        </tr>
      </thead>
      <tbody>
        {tableValues}
        {studentsList}
      </tbody>
    </table>
  );
}
