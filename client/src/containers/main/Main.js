import './Main.css';
import { useState } from 'react';

import ColorSchemeService from '../../services/colorscheme.service';
import ColorPicker from '../../components/colorPicker/ColorPicker';
import CellGrid from '../../components/cellGrid/CellGrid';

function Main(){

	const myColorSchemeService = new ColorSchemeService();

	const [colorState, setColorState] = useState({
		sourceColor: '#7fb5d8',
		mode: 'analogic',
		count: '2',
		colorScheme: []
	});

	const [colorScheme, setColorScheme] = useState();

	function requestScheme(){
		const {sourceColor, mode, count} = colorState;
		myColorSchemeService.getOneScheme(sourceColor.substring(1), mode, count)
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
		setColorState({...colorState, sourceColor: color});
	}

	function handleChange(e){
		let { name, value } = e.currentTarget;
		setColorState({ ...colorState, [name]: value })
	}

	return(
		<div className="main-container">
			<h1>Palleto APP</h1>
			<ColorPicker color={colorState.sourceColor} setPickerColor={setPickerColor} schemeOnClick={schemeOnClick} handleChange={handleChange}/>
			<CellGrid colors={colorScheme}/>
		</div>
	);
}

export default Main;