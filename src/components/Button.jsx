import React from 'react';
import { PlaceholderButton } from 'react-bootstrap';

export default function man({ onClick, text, className }) {
  return (
    <PlaceholderButton onClick={onClick} className={className + ' btn'}>
      {text}
    </PlaceholderButton>
  );
}
