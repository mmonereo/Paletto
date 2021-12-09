import './Mock.css';
import {useContext} from 'react';
import {ColorsContext} from '../../contexts/ColorsContext';

function Mock({children, count}) {



	return (
		<div className="Mock">
			{children}
		</div>
	);
}

export default Mock;