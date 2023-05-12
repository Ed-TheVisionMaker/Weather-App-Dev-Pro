import React from "react";

const RecentLocation = (props) => (
        <>
        <div className="recentCitiesContainer">
          <p className="recentLocation">{this.props.cityId}</p>
          <p className="recentTemp"></p>
          <div className="recentWeatherDescription"></div>
        </div>
      </>
);

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
            <div className="mainTemp">{temp}</div>
            <div className="maxMinTemps">
              <p className="maxTemp">Max {temp_max}</p>
              <p className="minTemp">Min {temp_min}</p>
            </div>
          </div>
          <div className="location">{cityId}</div>
        </div>
        <div>
          {/* this will be local stats searches container */}
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
