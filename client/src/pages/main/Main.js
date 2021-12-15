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
import SavePalettePanel from '../../components/savePalettePanel/SavePalettePanel';

const myColorSchemeService = new ColorSchemeService();

function Main(){

	const {userState, setUserState} = useContext(UserContext);

	const { colorState, setColorState } = useContext(ColorContext);

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

	const [sandBoxState, setSandBoxState] = useState({
		component: "None",
		totalColors: 0
	});

	function requestScheme(){

		const {sourceColor, mode, count} = colorState;

		myColorSchemeService.getOneScheme(sourceColor.substring(1), mode, count)
			.then(response => {
				const {colors} = response.data;
				setColorState({ ...colorState, colorScheme: colors.map(color => color.hex.value) });
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


				<div className="main-nav">
					<PaletteNav />
				</div>

				<div className="main-header">
					<h1>Paletto App</h1>
				</div>
					
				<SandBoxContext.Provider value={{ sandBoxState, setSandBoxState }}>
					<div className="main-content">
						<NewColorScheme schemeOnClick={schemeOnClick} />
						<SandBox />
					</div>
				</SandBoxContext.Provider>
			{(colorState.colorScheme.length > 0) && <SavePalettePanel />}
			
		</div>
	);
}

export default Main;