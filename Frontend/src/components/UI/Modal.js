import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    const {OnClose} = props;
    return ( 
        <div className={classes.backdrop} onClick={OnClose} />
    )
};

const ModalOverlay = props => {
    const {modal, content} = classes;
    const {children} = props;
    return (
        <div className={modal} >
            <div className={content} >
                {children}
            </div>
        </div>
    )
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
    const {onClose, children} = props;
    return(
        <>
            {ReactDOM.createPortal( < Backdrop  onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal( < ModalOverlay >{children}</ ModalOverlay>, portalElement)}
        </>
    )
};

export default Modal;