import { useState, useEffect } from "react";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    props.setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    props.setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${props.isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <i
        onClick={props.onClose}
        className="close-icon fa fa-times-circle-o"
        aria-hidden="true"
      ></i>
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

export default Modal;
