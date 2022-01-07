import './Modal.css'

function Modal({ closeModal, children}) {
	return(
		<div className="modal-wrapper">
			<div className="modal-content">
				<div className='close-icon' id={children.props.type} onClick={(e) => closeModal(e)}>
							<span>X</span>
					</div>
					{children}
			</div>
		</div>
	);
}

export default Modal;