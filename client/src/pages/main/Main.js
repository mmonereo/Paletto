import './Main.css';
import { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { UserContext } from '../../contexts/UserContext';
import loggedUser from '../../utils/loggedUser';
import ColorSchemeService from '../../services/colorscheme.service';
import NewColorScheme from '../../components/newColorScheme/NewColorScheme';
import PaletteNav from '../../components/paletteNav/PaletteNav';
import SandBox from '../../components/sandBox/SandBox';

const myColorSchemeService = new ColorSchemeService();

function Main(){

	const {UserState, setUserState} = useContext(UserContext);

	useEffect(() => {
		loggedUser()
			.then(currentUser => {
				setCurrentUser(currentUser.data);
			})
			.catch(err => console.log(err))
	}, []);

	function setCurrentUser(user){
		console.log("currentUser in main", user)
		setUserState({ ...user });
	}

	const [colorState, setColorState] = useState({
		sourceColor: '#7fb5d8',
		mode: 'analogic',
		count: '2',
		colorScheme: []
	});

	function requestScheme(){

		const {sourceColor, mode, count} = colorState;

		myColorSchemeService.getOneScheme(sourceColor.substring(1), mode, count)
			.then(response => {
				const {colors} = response.data;
				setColorState({ ...colorState, colorScheme: colors });
			})
			.catch(error => {
				console.log(error);
			});
	}

	function schemeOnClick(){
		requestScheme();
	}

	return(
		<div className="main-container">
			<ColorContext.Provider value={{ colorState, setColorState }}>
				<div className="main-nav-title">
					<PaletteNav />
					<h1>Paletto APP</h1>
				</div>
				<div className="main-content">
					<NewColorScheme schemeOnClick={schemeOnClick} />
					<SandBox />
				</div>
			</ColorContext.Provider>
		</div>
	);
}

export default Main;