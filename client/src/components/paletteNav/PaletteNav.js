import './PaletteNav.css'
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import CellGrid from '../cellGrid/CellGrid';


function PaletteNav(){

	const { userState } = useContext(UserContext);

	return(
		<nav className="palette-nav">
			<div className="palette-nav-img">
				<img src={userState.profileImg} alt="user-profile"></img>
			</div>
			<CellGrid />
			<ul className="palette-nav-list">

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value="Hello">
					</input>
				</li>

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value={userState.username} >
					</input>
				</li>

			</ul>
		</nav>
	);
}

export default PaletteNav;