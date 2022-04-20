
import ModalBackdrop from "./modalBackdrop";
import ModalCard from "./modalCard";

const Modal = (props) => {
  return (
    <div>
      <ModalBackdrop />
      <ModalCard modal={props.modal}/>
    </div>
  );
};

export default Modal;
