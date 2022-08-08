import React, { useState } from 'react';
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
  };
  return (
    <div className='add-container'>
      <h2 className='add-container__title'>addar estudiante</h2>
      <form onSubmit={handleSubmit} className='add-form' method='POST'>
        <fieldset className='add-form__fieldset'>
          <label htmlFor='nameST' className='add-form__label name-label'>
            Nombre
          </label>
          <input
            type='text'
            required
            name='nameST'
            className='add-form__input name-input'
            id='nameST'
            pattern='[A-Za-z]{2,20}'
            onChange={handleInputChange}
          />
          <label
            htmlFor='lastNameST'
            className='add-form__label lastname-label'
          >
            Apellido
          </label>
          <input
            type='text'
            className='add-form__input lastname-input'
            required
            name='lastNameST'
            id='lastNameST'
            pattern='[A-Za-z]{2,20}'
            onChange={handleInputChange}
          />
          <label htmlFor='active' className='add-form__label active-label'>
            Cursando actualmente
          </label>
          <select
            id='active'
            name='activeST'
            required
            className='add-form__input active-select'
            onChange={handleInputChange}
          >
            <option value=''>SELECT</option>
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </fieldset>
        <button type='submit'>Guardar</button>
      </form>
    </div>
  );
}
