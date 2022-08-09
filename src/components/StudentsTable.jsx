import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../functions/services';
import { TbEdit, TbTrash } from 'react-icons/tb';

export default function StudentsTable({ data }) {
  const navigate = useNavigate();
  const deleteItem = async (id) => {
    await deleteStudent(id);
    navigate(0);
  };
  const studentsList = data.data.map((item) => (
    <tr className='students-table__row' key={item.idST}>
      <td className='students-table__id'>{item.idST}</td>
      <td className='students-table__name'>{item.nameST}</td>
      <td className='students-table__last-name'>{item.lastNameST}</td>
      <td className='students-table__acitve'>{item.activeST ? 'Sí' : 'No'}</td>
      <td className='students-table__buttons d-flex justify-content-around align-items-center'>
        <Button href={`/edit/${item.idST}`}>
          <TbEdit />
        </Button>
        <Button onClick={() => deleteItem(item.idST)} variant='danger'>
          <TbTrash />
        </Button>
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover size='sm' responsive>
      <thead className='table-dark'>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cursando</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{studentsList}</tbody>
    </Table>
  );
}
