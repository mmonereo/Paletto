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
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

const myColorSchemeService = new ColorSchemeService();

function Main(){

	const {setUserState} = useContext(UserContext);

	const { colorState, setColorState } = useContext(ColorContext);

	const history = useHistory();

	useEffect(() => {
		//CR
		loggedUser()
			.then(currentUser => setCurrentUser(currentUser.data))
			.catch(err => {
				redirectToLanding();
				toast.error(err.response.data.errorMessage);
			})
	}, []);

	function redirectToLanding() {
		history.push('/');
	}

	function setCurrentUser(user){
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
				setColorState({ ...colorState, colorScheme: colors.map(color => color.hex.value), _id: ""});
			})
			.catch(error => {
				console.log(error);
			});
	}

	function displaySavePanel(){
		return colorState.colorScheme.length > 0;
	}

	function schemeOnClick(){
		requestScheme();
	}
	

	return(
		<div className="main-container">


				<div className="main-nav">
					<PaletteNav />
				</div>

				<SandBoxContext.Provider value={{ sandBoxState, setSandBoxState }}>
					<div className="main-content">
					<NewColorScheme schemeOnClick={schemeOnClick} displaySavePanel={displaySavePanel}/>
						<SandBox />
					</div>
				</SandBoxContext.Provider>
			
			
		</div>
	);
}

export default Main;