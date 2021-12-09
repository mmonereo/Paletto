import './RoundButton.css';

function RoundButton({text, bgColor}){
	return(
		<button className="round-button" style={{ backgroundColor: bgColor || null}}>
			{text}
		</button>
	)
}

export default RoundButton;