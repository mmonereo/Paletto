import './Landing.css';
import { useState } from 'react';
import AuthNav from '../../components/authNav/AuthNav';
import Modal from '../../components/modal/Modal';
import AuthForm from '../../components/authForm/AuthForm';
import UserProfileForm from '../../components/userProfileForm/UserProfileForm';


function Landing() {

	const [modalState, setModal] = useState({
		LogIn: false,
		SignUp: false,
		needsProfile: false,
		_id: null
	});

	function showModal(e){
		const {value} = e.target;
		setModal({
			...modalState, [value]: true
		});
	}

	function closeModal(e) {
		const { id } = e.target;
		setModal({
			...modalState, [id]: false
		});
	}

	function needsProfile(_id) {
		setModal({
			needsProfile: true,
			_id
		});
	}
	
	return (
		<>
			<AuthNav showModal={showModal}/>
			<div className="landing-container">
				<h1>Welcome</h1>

				{modalState.LogIn && 
				<Modal closeModal={closeModal}> 
					<AuthForm type="LogIn"/>
				</Modal>}

				{modalState.SignUp && 
					<Modal closeModal={closeModal}>
						<AuthForm type="SignUp" needsProfile={needsProfile} />
					</Modal>}
				{modalState.needsProfile && 
					<Modal closeModal={closeModal}>
						<UserProfileForm type="Create" _id={modalState._id}/>
					</Modal>}
			</div>
		</>
	);
}

export default Landing;