import React from 'react';

export default function StudentsTable({ data }) {
  const studentsList = data.data.map((item) => (
    <tr className='students-table__row' key={item.idST}>
      <td className='students-table__id'>{item.idST}</td>
      <td className='students-table__name'>{item.nameST}</td>
      <td className='students-table__last-name'>{item.lastNameST}</td>
      <td className='students-table__acitve'>{item.activeST}</td>
      <td className='students-table__buttons'>coming soon...</td>
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
