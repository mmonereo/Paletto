import './AuthForm.css';

function AuthForm({type}){
	return(
		<div className="auth-form">
			<div className="auth-form-title">
				<h2>{type === "signup" ? "Create Account": "Please Log In"}</h2>
			</div>
			<form>

				<div className="form-group">
					<label htmlFor="email-input">Email</label>
					<input type="email" id="email-input" name="email"/>
				</div>

				<div className="form-group">
					<label htmlFor="password-input">Password</label>
					<input type="password" id="password-input" name="password"/>
				</div>

				<button type="submit">{type === "signup" ? "Sign Up" : "Log In"}</button>
			</form>
		</div>
	);
}

export default AuthForm;