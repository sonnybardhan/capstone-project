import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, htmlFor, ...otherInputs }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherInputs} />

      {label && (
        <label
          htmlFor={htmlFor}
          className={`${otherInputs.value.length && 'shrink'} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
