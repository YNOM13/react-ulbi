import React from 'react';
import stylesInput from "./MyInput.module.css"
const MyInput = React.forwardRef((props,ref)=> {
  return (
    <input ref={ref} type="text" className={stylesInput.input} {...props}/>
  );
})

export default MyInput;