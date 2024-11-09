// components/Input.js
import React from 'react';

const Input = ({ label, type, id, placeholder, name, value, onChange, error }) => (
  <div className="flex flex-col w-full gap-2">
    <div className="flex justify-between">
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
    <input
      id={id}
      type={type}
      className={`w-full p-5 font-medium border rounded-md ${error ? 'border-red-500' : 'border-slate-300'} placeholder:opacity-60`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
