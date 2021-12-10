import './ColorCell.css'


function CollorCell({color}){
	return (
		<button>
			<div className="color-cell" style={{backgroundColor: color}}>
			</div>
		</button>
	)
}

export default CollorCell