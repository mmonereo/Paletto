import './Landing.css';
import {Switch, Route} from 'react-router-dom';
import AuthNav from '../../components/authNav/AuthNav';
import AuthForm from '../../components/authForm/AuthForm';


function Landing(){
	return(
		<>
			<AuthNav />
			<div className="landing-container">
				<h1>Welcome</h1>

					<Route path="/login" exact render={(props) => <div>test</div>} />
					<Route path="/signup" exact render={(props) => <AuthForm {...props} type="signup"/>}/>
			</div>
		</>
	);
}

export default Landing;