import './PalettesList.css';
import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

function PalettesList({header, palettes}){

	const [palettesState, setPalettesState] = useState(palettes);

	return(
		<div className="palettes-list">

			<div className="palettes-list-header">
				<h3>{header}</h3>
			</div>
			{palettesState.map((palette, index) => )}
		</div>
	);
}