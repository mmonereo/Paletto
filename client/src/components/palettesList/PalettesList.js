import './PalettesList.css';
import PalettesListItem from '../palettesListItem/PalettesListItem';

function PalettesList({header, palettes, onClickTag}){



	return(
		<div className="palettes-list">

			<div className="palettes-list-header">
				<h3>{header}</h3>
			</div>

			<div className="palettes-list-content">
				{palettes?.map((palette, index) => <PalettesListItem key={index} palette={palette} onClickTag={onClickTag}/>)}
				{palettes?.length === 0 && <p>No Palettes found</p>}
			</div>

		</div>
	);
}

export default PalettesList;