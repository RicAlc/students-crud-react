import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function SaveBackBtns() {
  const navigate = useNavigate();

  return (
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
  );
}
