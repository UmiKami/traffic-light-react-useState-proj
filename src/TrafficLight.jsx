import './styles/TrafficLight.css';
import { useState } from 'react';

const TrafficLight = () => {
	const [ color, setColor ] = useState(null);
    const [clickNum, setClickNum] = useState(0)

	const cycleColor = (run) => {
        if(run){
            let counter = 0;
            setClickNum((prevState) => {return prevState+1})
    
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

	return (
		<div className="main-container">
			<div className="hanging-cord" />
			<div className="light-container">
				<div
					className={`red-light light ${color === 'red' ? 'selected-red' : null}`}
					onClick={() => setColor('red')}
				/>
				<div
					className={`yellow-light light ${color === 'yellow' ? 'selected-yellow' : null}`}
					onClick={() => setColor('yellow')}
				/>
				<div
					className={`green-light light ${color === 'green' ? 'selected-green' : null}`}
					onClick={() => setColor('green')}
				/>
			</div>
			<button className="btn" onClick={() => {
                clickNum > 1 ? cycleColor(false) : cycleColor(true)
            }}>
				Cycle
			</button>
		</div>
	);
};

export default TrafficLight;
