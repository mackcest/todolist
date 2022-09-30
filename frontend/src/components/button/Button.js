import React from 'react';
import PropTypes from 'prop-types';
//UI import
import { black, red, grey, grey2, white } from '../common/colors';
import { level1, level2, level3, level4 } from '../common/shadows';
//Component
const Button = (props) => {
  const { children, type, disabled, theme, ...other } = props;
  return (
    <button type={type} disabled={disabled} {...other}>
      {children}
      <style jsx>
        {`
          button {
            margin: 0.7em, 1.7em;
            border: none;
            border-radius: 3px;
            text-transform: uppercase;
            font-family: 'Inter';
            cursor: pointer;
            outline: none;
            font-size: 1em;
            color: ${theme !== 'none' ? white : black};
            background-color: ${theme === 'red' ? red : theme === 'grey' ? grey : white};
            box-shadow: ${theme !== 'none' ? level2 : 'none'};
            background-image: ${theme === 'red' ? red : theme === 'grey' ? grey : 'none'};
          }
          button:hover {
            box-shadow: ${level3};
          }
          button:active {
            box-shadow: ${level4};
          }
          button:disable {
            color: ${white};
            box-shadow: ${level1};
            background-color: ${grey2};
          }
        `}
      </style>
    </button>
  );
};
// Component properties
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'none',
};

export default Button;
