import React from 'react';

export default function Button({ onClick, text, className }) {
  return (
    <div onClick={onClick} className={className + ' btn'}>
      {text}
    </div>
  );
}
