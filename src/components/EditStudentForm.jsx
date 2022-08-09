import React, { useEffect, useState } from 'react';
import { Alert, Form, FormGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../functions/services';
import SaveBackBtns from './SaveBackBtns';

export default function EditStudentForm() {
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
    <div className='container bg-light rounded p-3'>
      <Form onSubmit={handleSubmit} method='PUT'>
        <fieldset className='edit-form__fieldset'>
          <Form.Label htmlFor='nameEdit'>Nombre</Form.Label>
          <Form.Control
            id='nameEdit'
            type='text'
            name='nameST'
            required
            onChange={handleInputChange}
            defaultValue={studentInfo ? studentInfo.data[0].nameST : null}
          />
        </fieldset>
        <FormGroup>
          <Form.Label htmlFor='lastNameEdit'>Apellido</Form.Label>
          <Form.Control
            id='lastNameEdit'
            name='lastNameST'
            type='text'
            required
            onChange={handleInputChange}
            defaultValue={studentInfo ? studentInfo.data[0].lastNameST : null}
          />
        </FormGroup>
        {!studentInfo ? null : (
          <>
            <Form.Group>
              <Form.Label htmlFor='activeEdit'>Cursando actualmente</Form.Label>
              <Form.Select
                id='activeEdit'
                name='activeST'
                onChange={handleInputChange}
                defaultValue={studentInfo.data[0].activeST}
              >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
          </>
        )}
        <SaveBackBtns />
      </Form>
      {!alert ? null : <Alert variant='success'>Cambios realizados</Alert>}
    </div>
  );
}
