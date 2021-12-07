import './AuthNav.css';


function AuthNav({showModal}) {
	return (
		<nav className="auth-nav">
			<ul className="auth-nav-list">

				<li className="auth-nav-item">
					<input type="button" className="auth-nav-link" value="LogIn" onClick={(e)=>showModal(e)}>
					</input>
				</li>

				<li className="auth-nav-item">
					<input type="button" className="auth-nav-link" value="SignUp" onClick={(e) => showModal(e)}>
					</input>
				</li>

			</ul>
		</nav>
	);
}

export default AuthNav;