import './Main.css';
import { useState } from 'react';

import ColorSchemeService from '../../services/colorscheme.service';
import ColorPicker from '../../components/colorPicker/ColorPicker';
import CellGrid from '../../components/cellGrid/CellGrid';

function Main(){

	const myColorSchemeService = new ColorSchemeService('analogic', '6');

	const [colorState, setColorState] = useState("#b32aa9");

	const [colorScheme, setColorScheme] = useState();

	function requestScheme(){
		myColorSchemeService.getOneScheme(colorState.substring(1))
			.then(response => {
				const {colors} = response.data;
				setColorScheme(colors);
			})
			.catch(error => {
				console.log(error);
			});
	}

	function schemeOnClick(){
		console.log("clicked");
		requestScheme();
	}

	function setPickerColor(color){
		setColorState(color);
	}

	return(
		<div className="main-container">
			<h1>Palleto APP</h1>
			<ColorPicker color={colorState} setPickerColor={setPickerColor} schemeOnClick={schemeOnClick}/>
			<CellGrid colors={colorScheme}/>
		</div>
	);
}

export default Main;