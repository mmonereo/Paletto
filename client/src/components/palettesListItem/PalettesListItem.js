import './PalettesListItem.css';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import {ColorContext} from '../../contexts/ColorContext';
import CellGridPlain from '../cellGridPlain/CellGridPlain';

function PalettesListItem({palette}){

	const { setColorState } = useContext(ColorContext);

	const history = useHistory();

	function redirectToMain() {
		history.push('/palettes');
	}

	function listItemOnClick(){
		setColorState({
			sourceColor: palette.colors[0],
			mode: palette.mode,
			count: palette.count,
			colorScheme: palette.colors,
			creator: palette.creator
		});
		redirectToMain();
	}


	return(

		<button className="palettes-list-item-btn" type="button" onClick={()=>listItemOnClick()}>
			<div className="palettes-list-item">
				<div className="palettes-list-item-header">
					<h5>{palette.name}</h5>
				</div>
				<CellGridPlain palette={palette}/>
				<div className="palettes-list-item-tags">
					{palette.tags.map((tag, index) => <span key={index}>[{tag}] </span>)}
				</div>
			</div>
		</button>
	);
}

export default PalettesListItem