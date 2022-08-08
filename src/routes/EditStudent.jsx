import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../functions/services';

export default function EditStudent() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [inputValue, setInputValue] = useState({});
  const [alert, setAlert] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStudent(Number(id), setStudentInfo);
  }, [id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateStudent(studentInfo.data[0].idST, inputValue);
    setAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <>
      <h2 className='edit-container__title my-5  text-light'>
        Editar estudiante
      </h2>
      <div className='container bg-light rounded p-3'>
        <Form onSubmit={handleSubmit} method='PUT'>
          <fieldset className='edit-form__fieldset'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              name='nameST'
              required
              onChange={handleInputChange}
              defaultValue={studentInfo ? studentInfo.data[0].nameST : null}
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name='lastNameST'
              type='text'
              required
              onChange={handleInputChange}
              defaultValue={studentInfo ? studentInfo.data[0].lastNameST : null}
            />
            {!studentInfo ? null : (
              <>
                <Form.Label>Cursando actualmente</Form.Label>
                <Form.Select
                  name='activeST'
                  onChange={handleInputChange}
                  defaultValue={studentInfo.data[0].activeST}
                >
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </Form.Select>
              </>
            )}
          </fieldset>
          <div className='d-flex justify-content-between'>
            <Button type='submit' className='m-2'>
              Guardar
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
        {!alert ? null : <Alert variant='success'>Cambios realizados</Alert>}
      </div>
    </>
  );
}
