import './ColorCell.css'


function CollorCell({color}){
	return (
		<div className="color-cell" style={{backgroundColor: color}}>
		</div>
	)
}

export default CollorCell