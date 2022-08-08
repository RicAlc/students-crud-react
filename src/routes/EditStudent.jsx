import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../functions/services';

export default function EditStudent() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [inputValue, setInputValue] = useState({});
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
    navigate('/');
  };
  return (
    <div className='edit-container'>
      <h2 className='edit-container__title'>Editar estudiante</h2>
      <form onSubmit={handleSubmit} className='edit-form' method='PUT'>
        <fieldset className='edit-form__fieldset'>
          <label htmlFor='nameST' className='edit-form__label name-label'>
            Nombre
          </label>
          <input
            type='text'
            required
            name='nameST'
            className='edit-form__input name-input'
            id='nameST'
            onChange={handleInputChange}
            defaultValue={studentInfo ? studentInfo.data[0].nameST : null}
          />
          <label
            htmlFor='lastNameST'
            className='edit-form__label lastname-label'
          >
            Apellido
          </label>
          <input
            type='text'
            className='edit-form__input lastname-input'
            required
            name='lastNameST'
            id='lastNameST'
            onChange={handleInputChange}
            defaultValue={studentInfo ? studentInfo.data[0].lastNameST : null}
          />
          {!studentInfo ? null : (
            <>
              <label htmlFor='active' className='edit-form__label active-label'>
                Cursando actualmente
              </label>
              <select
                id='active'
                name='activeST'
                className='edit-form__input active-select'
                onChange={handleInputChange}
                defaultValue={studentInfo.data[0].activeST}
              >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
            </>
          )}
        </fieldset>
        <button type='submit'>Guardar</button>
      </form>
    </div>
  );
}
