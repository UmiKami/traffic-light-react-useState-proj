import "./styles/TrafficLight.css";
import { useState } from "react";

const LightBulb = (props) => {
  return (
    <div
      className={`${props.targetColor}-light light ${props.color === props.targetColor ? "selected-" + props.targetColor : null}`}
      key={props.key}
    />
  );
};

const TrafficLight = () => {
  const [color, setColor] = useState(null);
  const [clickNum, setClickNum] = useState(0);
  const [lights, setLights] = useState([
    "red",
    "yellow",
    "green",
  ]);
  const [render, rerender] = useState(true);

  const turnOnLight = (color) =>{
      setColor(color)
  }

  const addLight = () => {
    let newLights = lights;
    newLights.push(
		"purple"
    );
    setLights(newLights);
	rerender(!render);
  };

  const cycleColor = (run) => {
    if (run) {
      let counter = 0;
      setClickNum((prevState) => {
        return prevState + 1;
      });

      setInterval(() => {
        counter++;
        setColor(lights[counter % lights.length])
      }, 1000);
    }
  };

  return (
    <div className="main-container">
      <div className="hanging-cord" />
      <div className="light-container">{lights.map((lightColor, idx) => {
		  return <div onClick={()=>turnOnLight(lightColor)}>
              <LightBulb color={color} targetColor={lightColor} key={idx}/>
          </div>
	  })}</div>
      <section className="controls">
        <button
          className="btn"
          onClick={() => {
            clickNum > 1 ? cycleColor(false) : cycleColor(true);
          }}
        >
          Cycle
        </button>
        <button className="btn" onClick={() => {
			addLight();
		}}>Add Purple Light</button>
      </section>
    </div>
  );
};

export default TrafficLight;