import './Landing.css';
import { useState } from 'react';
import AuthNav from '../../components/authNav/AuthNav';
import AuthModal from '../../components/authModal/AuthModal';


function Landing() {

	const [modalState, setModal] = useState({
		LogIn: false,
		SignUp: false,
		email: '',
		password: ''
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
			...modalState, email: '', password: '', [id]: false
		});
	}

	function handleChange(e) {
		const { value, name } = e.target;
		setModal({
			...modalState, [name]: value
		});
	}

	return (
		<>
			<AuthNav showModal={showModal}/>
			<div className="landing-container">
				<h1>Welcome</h1>
				{modalState.LogIn && <AuthModal type="LogIn" closeModal={closeModal} handleChange={handleChange}/>}
				{modalState.SignUp && <AuthModal type="SignUp" closeModal={closeModal} handleChange={handleChange}/>}
			</div>
		</>
	);
}

export default Landing;