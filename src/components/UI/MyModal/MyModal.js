import React from 'react';
import modalStyles from "./MyModal.module.css"
const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = [modalStyles.myModal]

  if(visible){
    rootClasses.push(modalStyles.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
      <div
        onClick={e=>e.stopPropagation()}
        className={modalStyles.myModalContent}>
          {children}
      </div>
    </div>
  );
};

export default MyModal;
