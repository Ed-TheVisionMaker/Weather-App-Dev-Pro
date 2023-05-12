import React from "react";

const Description = (props) => {
  console.log(props.weather, "element in display data")

  // const weather = props.weather;
  const mainWeather = props.weather.map(element => element.main)    
  const descriptionWeather = props.weather.map(element => element.description);
  
  return (
    <div>
      <p>{mainWeather}</p>
      <p>{descriptionWeather}</p>
    </div>
  )
}

export default class DisplayData extends React.Component {

  render() {
    const { temp, temp_min, temp_max } = this.props.data.data.main;
    const cityId = this.props.cityId;

    return (
      <div className="dataDisplay">
        <h2>The weather forecast for {cityId}</h2>
        <div className="tempContainer">
          <div className="skyState"></div>
          <div className="temps">
            <h3>Temps</h3>
            <div className="mainTemp">Av. {temp}</div>
            <div className="maxMinTemps">
              <p className="maxTemp">Max {temp_max}</p>
              <p className="minTemp">Min {temp_min}</p>
            </div>
          </div>
          <div>
            <Description weather={this.props.data.data.weather} />
          </div>
        </div>
        <div>
        </div>
        {/* Make these repeated sections below into a component */}
        <div className="weatherDetailsContainer">
          <p className="text">Small description text here</p>
          <div className="rainContainer">
            <div className="icon">icon</div>
            <div className="weatherDetailDescriptionr">
              <h3 className="detailText">Rain</h3>
              <p className="detailStat">00mm</p>
            </div>
            <div>Text going beneath the weather stats</div>
          </div>
          <div className="rainContainer">
            <div className="icon">icon</div>
            <div className="weatherDetailDescription">
              <h3 className="detailText">Rain</h3>
              <p className="detailStat">00mm</p>
            </div>
            <div>Text going beneath the weather stats</div>
          </div>
          <div className="rainContainer">
            <div className="icon">icon</div>
            <div className="weatherDetailDescription">
              <h3 className="detailText">Rain</h3>
              <p className="detailStat">00mm</p>
            </div>
            <div>Text going beneath the weather stats</div>
          </div>
          <div className="rainContainer">
            <div className="icon">icon</div>
            <div className="weatherDetailDescription">
              <h3 className="detailText">Rain</h3>
              <p className="detailStat">00mm</p>
            </div>
            <div>Text going beneath the weather stats</div>
          </div>
        </div>
      </div>
    );
  }
}
