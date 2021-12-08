import './Main.css';
import { useState } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

import ColorSchemeService from '../../services/colorscheme.service';
import NewColorScheme from '../../components/newColorScheme/NewColorScheme';
import PaletteNav from '../../components/paletteNav/PaletteNav';


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
		requestScheme();
	}

	return(
		<div className="main-container">
			<ColorContext.Provider value={{ colorState, setColorState }}>
				<PaletteNav />
				<h1>Paletto APP</h1>
				<NewColorScheme schemeOnClick={schemeOnClick}/>
			</ColorContext.Provider>
		</div>
	);
}

export default Main;