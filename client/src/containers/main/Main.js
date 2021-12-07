import './Main.css';
import { useState } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

import ColorSchemeService from '../../services/colorscheme.service';
import NewColorScheme from '../../components/newColorScheme/NewColorScheme';


function Main(){

	const myColorSchemeService = new ColorSchemeService();

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
		console.log("clicked");
		requestScheme();
	}

	return(
		<div className="main-container">
			<h1>Palleto APP</h1>
			<ColorContext.Provider value={{colorState, setColorState}}>
			<NewColorScheme schemeOnClick={schemeOnClick}/>
			</ColorContext.Provider>
		</div>
	);
}

export default Main;