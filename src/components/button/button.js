import React from 'react';
import './button.styles.js';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles.js';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

// const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

const getBtnType = (btnType = BUTTON_TYPE_CLASSES.base) => {
  const Buttons = {
    base: BaseButton,
    'google-sign-in': GoogleSignInButton,
    inverted: InvertedButton,
  };

  return Buttons[btnType];
};

const Button = ({ buttonType, ...otherProps }) => {
  // const CustomBtn = getButtonType(buttonType);
  const CustomBtn = getBtnType(buttonType);
  return <CustomBtn {...otherProps} />;
};

export default Button;
