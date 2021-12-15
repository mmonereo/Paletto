import './Modal.css'

function Modal({ closeModal, children}) {
	return(
		<div className="modal-wrapper">
			<div className="modal-content">
					{children}
					{children.props.type !== "Create" && <button type="button" className="modal-close" id={children.props.type} onClick={(e) => closeModal(e)}>Close</button>}
			</div>
		</div>
	);
}

export default Modal;