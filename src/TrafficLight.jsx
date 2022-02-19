import './styles/TrafficLight.css';
import { useState } from 'react';

const LightBulb = (props) => {
	return (
		<div
			className={`${props.targetColor}-light light ${props.color === props.targetColor
				? 'selected-' + props.targetColor
				: null}`}
			key={props.key}
		/>
	);
};

const TrafficLight = () => {
	const [ color, setColor ] = useState(null);
	const [ clickNum, setClickNum ] = useState(0);
	const [ lights, setLights ] = useState([ 'red', 'yellow', 'green' ]);
	const [ render, rerender ] = useState(true); // force rerender

	const turnOnLight = (color) => {
		setColor(color);
	};

	const addLight = () => {
		let newLights = lights; // [] = [ "red", "yellow", "green" ]
		newLights.push('purple');

		setLights(newLights); // newLights = [ "red", "yellow", "green", "purple" ]
		rerender(!render); // forces react to render new array || otherwise it WON'T render
	};

	const cycleColor = (run) => {
		if (run) {
			let counter = 0;
			setClickNum((prevState) => {
				return prevState + 1;
			});

			setInterval(() => {
				counter++;
				setColor(lights[counter % lights.length]); // lights' an array, 1 % 3 = index 1 = red ; 2 % 3 = index 2 = yellow; ... ; 4 % 3 = index 1 = red
			}, 1000);
		}
	};

	return (
		<div className="main-container">
			<div className="hanging-cord" />
			<div className="light-container">
				{lights.map((lightColor, idx) => { // iterating thru array [ "red", "yellow", "green", "purple" ]; which was set in addLight function
					return (
						<div onClick={() => turnOnLight(lightColor)}>
							<LightBulb color={color} targetColor={lightColor} key={idx} />
						</div>
					);
				})}
			</div>
			<section className="controls">
				<button
					className="btn"
					onClick={() => {
						clickNum > 1 ? cycleColor(false) : cycleColor(true);
					}}
				>
					Cycle
				</button>
				<button
					className="btn"
					onClick={() => {
						addLight();
					}}
				>
					Add Purple Light
				</button>
			</section>
		</div>
	);
};

export default TrafficLight;
