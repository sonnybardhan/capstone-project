import React from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';
import './form-input.styles.scss';

const FormInput = ({ label, htmlFor, ...otherInputs }) => {
  return (
    <Group>
      <Input {...otherInputs} />

      {label && (
        <FormInputLabel shrink={otherInputs.value.length} htmlFor={htmlFor}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
