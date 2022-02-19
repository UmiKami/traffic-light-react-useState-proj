import './styles/TrafficLight.css';
import { useState } from 'react';

const TrafficLight = () => {
	const [ color, setColor ] = useState(null);
	const [ clickNum, setClickNum ] = useState(0);

	const cycleColor = (run) => {
		if (run) {
			let counter = 0;
			setClickNum((prevState) => {
				return prevState + 1;
			});

			setInterval(() => {
				counter++;
				if (counter % 3 === 1) {
					setColor('red');
				} else if (counter % 3 === 2) {
					setColor('yellow');
				} else if (counter % 3 === 0) {
					setColor('green');
				}
			}, 1000);
		}
	};

	const addLight = () => {
		lightsArr.push(
			<div
				className={`purple-light light ${color === 'purple' ? 'selected-purple' : null}`}
				onClick={() => setColor('purple')}
                key={4}
			/>
		);
	};



	const lightsArr = [
		<div
			className={`red-light light ${color === 'red' ? 'selected-red' : null}`}
			onClick={() => setColor('red')}
            key={1}
		/>,
		<div
			className={`yellow-light light ${color === 'yellow' ? 'selected-yellow' : null}`}
			onClick={() => setColor('yellow')}
            key={2}
		/>,
		<div
			className={`green-light light ${color === 'green' ? 'selected-green' : null}`}
			onClick={() => setColor('green')}
            key={3}
		/>
	];

	return (
		<div className="main-container">
			<div className="hanging-cord" />
			<div className="light-container">{lightsArr}</div>
			<section className="controls">
				<button
					className="btn"
					onClick={() => {
						clickNum > 1 ? cycleColor(false) : cycleColor(true);
					}}
				>
					Cycle
				</button>
                <button className="btn" onClick={()=>addLight}>
                    Add Light
                </button>
			</section>
		</div>
	);
};

export default TrafficLight;
