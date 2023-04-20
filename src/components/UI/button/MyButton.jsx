import React from 'react';
import buttonStyles from "./MyButton.module.css"
const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={buttonStyles.button}>
      {children}
    </button>
  );
};

export default MyButton;