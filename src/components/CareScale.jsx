import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={sun} alt='sun-icon' />
		) : (
			<img src={water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}
		
function handleClick(scaleValue, careType) {
	alert(
        `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? "de lumière" : "d'arrosage"}`
    )
}

export default CareScale
