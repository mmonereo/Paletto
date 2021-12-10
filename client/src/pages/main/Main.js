import './Main.css';
import { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { UserContext } from '../../contexts/UserContext';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import loggedUser from '../../utils/loggedUser';
import ColorSchemeService from '../../services/colorscheme.service';
import NewColorScheme from '../../components/newColorScheme/NewColorScheme';
import PaletteNav from '../../components/paletteNav/PaletteNav';
import SandBox from '../../components/sandBox/SandBox';

const myColorSchemeService = new ColorSchemeService();

function Main(){

	const {setUserState} = useContext(UserContext);

	useEffect(() => {
		//CR
		loggedUser()
			.then(currentUser => setCurrentUser(currentUser.data))
			.catch(err => console.log(err))
	}, []);

	function setCurrentUser(user){
		console.log("currentUser in main", user)
		setUserState({ ...user });
	}

	const [colorState, setColorState] = useState({
		sourceColor: '#7fb5d8',
		mode: 'analogic',
		count: 2,
		colorScheme: []
	});

	const [sandBoxState, setSandBoxState] = useState({
		component: "None",
		totalColors: 0
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
					
				<SandBoxContext.Provider value={{ sandBoxState, setSandBoxState }}>
					<div className="main-content">
						<NewColorScheme schemeOnClick={schemeOnClick} />
						<SandBox />
					</div>
				</SandBoxContext.Provider>

			</ColorContext.Provider>
		</div>
	);
}

export default Main;