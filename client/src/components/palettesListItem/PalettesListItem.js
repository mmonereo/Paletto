import './PalettesListItem.css';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import {ColorContext} from '../../contexts/ColorContext';
import CellGridPlain from '../cellGridPlain/CellGridPlain';

function PalettesListItem({ palette, onClickTag}){

	const { setColorState } = useContext(ColorContext);

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function listItemOnClick(){
		setColorState({
			sourceColor: palette.sourceColor,
			mode: palette.mode,
			count: palette.count,
			colorScheme: palette.colors,
			creator: palette.creator
		});
		redirectToPalettes();
	}


	return(
		<div className="palettes-list-item">

				<button className="palettes-list-item-btn" type="button" onClick={()=>listItemOnClick()}>
						<div className="palettes-list-item-header">
							<h5>{palette.name}</h5>
						</div>
						<CellGridPlain palette={palette}/>
				</button>

				<div className="palettes-list-item-tags">
					{palette.tags.map((tag, index) => <span onClick={(e)=>onClickTag(e, tag)} key={index}>[{tag}] </span>)}
				</div>
		</div>
	);
}

export default PalettesListItem