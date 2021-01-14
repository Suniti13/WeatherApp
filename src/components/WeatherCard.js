import React from 'react';

function weatherCard(props) {

  const date = new Date(props.data.dt * 1000)
  const city = props.data.name;
  const desc = props.data.weather[0].main
  const icon = props.data.weather[0].icon
  const temp = props.data.main.temp

  return (
    <div className="weatherCard glassCard">
      <div className="cityInfo">
        <h2 className="cityName"> {city} </h2>
        <p>{date.toLocaleDateString()} - {date.toLocaleTimeString()}, {desc}</p>
      </div>

      <div>
        <div className="imgDiv">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
        </div>
        <div className="tempDiv">
          <h2>{temp} &deg;C</h2>
        </div>
      </div>
      
    </div>
  );
}

export default weatherCard;
