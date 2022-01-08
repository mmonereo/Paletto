import './Modal.css'

function Modal({ closeModal, children}) {
	return(
		<div className="modal-wrapper">
			<div className="modal-content">
				{children.props.type !== "Create" && <button className='close-icon' id={children.props.type} onClick={(e) => closeModal(e)}>X</button>}
					{children}
			</div>
		</div>
	);
}

export default Modal;