import './PalettesList.css';
import {useState, useEffect} from 'react';
import PalettesListItem from '../palettesListItem/PalettesListItem';

function PalettesList({header, palettes}){



	return(
		<div className="palettes-list">

			<div className="palettes-list-header">
				<h3>{header}</h3>
			</div>

			<div className="palettes-list-content">
				{palettes?.map((palette, index) => <PalettesListItem key={index} palette={palette}/>)}
				{palettes?.length === 0 && <p>You havent saved any Palettes</p>}
			</div>

		</div>
	);
}

export default PalettesList;