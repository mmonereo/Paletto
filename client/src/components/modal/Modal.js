import './Modal.css'

function Modal({ closeModal, children}) {
	return(
		<div className="modal-wrapper">
			<div className="modal-content">
					{children}
					<button type="button" id={children.props.type} onClick={(e) => closeModal(e)}>Close</button>
			</div>
		</div>
	);
}

export default Modal;