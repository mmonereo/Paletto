import './MockLogInForm.css';
import MockButton from '../../elements/mockButton/MockButton';
import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';


function MockLogInForm() {

	const { sandBoxState } = useContext(SandBoxContext);

	const mainStyle = {
		backgroundColor: sandBoxState.color1,
		color: sandBoxState.textcolor,
		borderColor: sandBoxState.color3
	}

	const inputStyle = {
		backgroundColor: sandBoxState.color2,
		borderColor: sandBoxState.color3
	}

	const buttonStyle = {
		border: 0,
		backgroundColor: sandBoxState.color3,
		color: sandBoxState.textcolor,
	}



	return (

		<div className='mock-auth-form' style={mainStyle}>

			<div className="mock-auth-form-title">
				<h2>Log In</h2>
			</div>

			<form>

				<div className="form-group">
					<label htmlFor="email-input" >Email</label>
					<input type="text" id="email-input" name="email" style={inputStyle} />
				</div>

				<div className="form-group">
					<label htmlFor="password-input"  >Password</label>
					<input type="password" id="password-input" name="password" autoComplete="on" style={inputStyle}/>
				</div>
				
				<div className='mock-auth-form-btn'>
					<MockButton text="Submit" buttonStyle={buttonStyle} />
				</div>

			</form>

		</div>
	);
}

export default MockLogInForm;