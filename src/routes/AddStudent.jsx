import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../functions/services';

export default function AddStudent() {
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
    console.log(inputValue);
  };
  return (
    <>
      <h2 className='edit-container__title my-5 text-light'>
        Agregar estudiante
      </h2>
      <div className='container bg-light rounded p-3 mw-25'>
        <Form onSubmit={handleSubmit} method='POST'>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              name='nameST'
              required
              pattern='[A-Za-z]{2,20}'
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='lastNameST'>Apellido</Form.Label>
            <Form.Control
              type='text'
              name='lastNameST'
              required
              pattern='[A-Za-z]{2,20}'
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='active'>Cursando actualmente</Form.Label>
            <Form.Select
              id='active'
              name='activeST'
              required
              onChange={handleInputChange}
            >
              <option value=''>SELECT</option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </Form.Select>
          </Form.Group>
          <div className='d-flex justify-content-between'>
            <Button type='submit' className='m-2'>
              Agregar
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant='outline-dark'
              className='m-2'
            >
              Volver
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
