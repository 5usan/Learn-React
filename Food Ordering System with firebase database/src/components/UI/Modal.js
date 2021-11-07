import React from "react";
import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElememt = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElememt)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElememt
      )}
    </React.Fragment>
  );
};

export default Modal;
