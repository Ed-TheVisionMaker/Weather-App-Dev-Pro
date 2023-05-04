import React from "react";
import axios from "axios";



const ShowData = (props) => {
console.log(props.data.data.coord, "in show data")
 return (
  <div>
  <div>{"something"}</div>
  {/* <div>{props.data.data.base}</div> */}
  </div>
 )
  // if (this.state.data !== undefined) {
  //   console.log("showData after if statement")
  //   console.log("was called show data")
  //   const cityId = this.props.match.params.cityId;
  //   const weatherData = this.state.data
  //   console.log(weatherData, "weather data")
  //   return (
  //     <div>
  //     {/* <div>{cityId} this is city page</div> */}
  //     {/* <div>{weatherData.coord.lat} and {weatherData.coord.lon}</div> */}
  //     </div>
  //   )
  // }
  
}

export default class City extends React.Component {
  state = {
    data: {},
    isLoading: false,
    isError: false
  };

  getCityData = async (city) => {
    try {
      this.setState({ isLoading: true });
      const apiKey = "360c24ca8f6f6c57345a7685b6ca7548";
      const geoCodeUrl = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
      );
      let cityLat;
      let cityLong;
      
      geoCodeUrl.data.find(returnedCities => {
        if (returnedCities.name === city) {
          cityLat = returnedCities.lat;
          cityLong = returnedCities.lon;
        }
        return (cityLat, cityLong)
      })
  
      const latLongUrl = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}`)
 
      this.setState({ data: latLongUrl})
      // console.log(geoCodeUrl.data.lat, geoCodeUrl.data.lon, "data: city page")
      } catch (error) {
        console.log("error in API call, city page")
      }
    
  };

  componentDidMount() {
    const cityId = this.props.match.params.cityId;
    this.getCityData(cityId);
  }

  render() {
    const cityId = this.props.match.params.cityId;
    const isData = this.state.data
    console.log(isData, "state data from render, city page")
    return (
      <div>
      <div>{cityId} this is city page</div>
      {isData && <ShowData data={this.state.data} />}
      </div>
      // <div>
      // {isData && <ShowData />}
      // </div>
    )
  }
}
