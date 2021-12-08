import './Landing.css';
import { useState, useContext  } from 'react';
import { UserContext } from '../../contexts/UserContext';
import AuthNav from '../../components/authNav/AuthNav';
import AuthModal from '../../components/authModal/AuthModal';


function Landing({submitAuthModal}) {

	const {setUserState} = useContext(UserContext);

	const [modalState, setModal] = useState({
		LogIn: false,
		SignUp: false,
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
		setUserState({

		})
	}

	return (
		<>
			<AuthNav showModal={showModal}/>
			<div className="landing-container">
				<h1>Welcome</h1>
				{modalState.LogIn && <AuthModal type="LogIn" closeModal={closeModal} submitAuthModal={submitAuthModal}/>}
				{modalState.SignUp && <AuthModal type="SignUp" closeModal={closeModal} submitAuthModal={submitAuthModal}/>}
			</div>
		</>
	);
}

export default Landing;