import './AuthNav.css';
import {NavLink} from 'react-router-dom';

function AuthNav(props) {
	return (
		<nav className="auth-nav">
			<ul className="auth-nav-list">
				<li className="auth-nav-item">
					<NavLink to="/login" className="auth-nav-link">
						Login
					</NavLink>
				</li>
				<li className="auth-nav-item">
					<NavLink to="/signup" className="auth-nav-link">
						Sign Up
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default AuthNav;