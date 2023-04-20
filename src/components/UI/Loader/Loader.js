import React from 'react';
import "./Loader.css"
const Loader = () => {
  return (<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><div className="lds-dual-ring"></div></div>);
};

export default Loader;