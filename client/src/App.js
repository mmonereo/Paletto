
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Main from './containers/main/Main';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/palettes" component={Main} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
