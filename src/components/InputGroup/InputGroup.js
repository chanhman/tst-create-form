import React from 'react';
import './styles.css';

export default function InputGroup({
  autoFocus,
  id,
  label,
  name,
  onChange,
  required = true,
  type = 'text',
  value,
}) {
  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  );
}
