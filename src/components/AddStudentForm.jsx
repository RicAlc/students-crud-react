import SaveBackBtns from '../components/SaveBackBtns';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../functions/services';
import React, { useState } from 'react';

export default function AddStudentForm() {
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createStudent(
      inputValue.nameST,
      inputValue.lastNameST,
      inputValue.activeST
    );
    navigate('/');
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div className='container bg-light rounded p-3 mw-25'>
      <Form onSubmit={handleSubmit} method='POST'>
        <Form.Group>
          <Form.Label htmlFor='nameAdd'>Nombre</Form.Label>
          <Form.Control
            type='text'
            id='nameAdd'
            name='nameST'
            required
            pattern='[A-Za-z]{2,20}'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='lastNameAdd'>Apellido</Form.Label>
          <Form.Control
            type='text'
            id='lastNameAdd'
            name='lastNameST'
            required
            pattern='[A-Za-z]{2,20}'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='activeAdd'>Cursando actualmente</Form.Label>
          <Form.Select
            id='activeAdd'
            name='activeST'
            required
            onChange={handleInputChange}
          >
            <option value=''>SELECT</option>
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </Form.Select>
        </Form.Group>
        <SaveBackBtns />
      </Form>
    </div>
  );
}
