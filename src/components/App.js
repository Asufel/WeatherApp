import React, { Fragment, Component } from "react";
import "./App.css";
import Result from "./Result";
import Form from "./Form";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "55d46950bde17f9e929a16565cd3e30e";
const UNITS = "metric";

class App extends Component {
  state = {
    chosenCity: "",
    temp: "",
    feelsTemp: "",
    humidity: "",
    pressure: "",
    clouds: "",
    sunrise: "",
    sunset: "",
    country: "",
    city: "",
    wind: "",
    icon: "",
    err: "",
    timezone: "",
  };

  setValue = (e) => {
    const value = e.target.value;
    this.setState({
      chosenCity: value,
    });
  };
  browseCity = (e) => {
    const API = `${API_URL}?q=${this.state.chosenCity}&appid=${API_KEY}&units=${UNITS}`;
    e.preventDefault();
    const { chosenCity } = this.state;
    if (chosenCity === "") {
      return;
    } else {
      console.log(chosenCity);

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udało się");
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            chosenCity: "",
            temp: data.main.temp.toFixed(0),
            feelsTemp: data.main.feels_like.toFixed(0),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            clouds: data.clouds.all,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            city: data.name,
            timezone: data.timezone,
            wind: data.wind.speed.toFixed(1),
            icon: data.weather[0].icon,
            err: false,
          });
        })
        .catch((err) => {
          this.setState({
            err: true,
          });
        });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <h1 className="app__heading">
            WeatherApp<i className="fas fa-sun"></i>
            <img
              src="http://openweathermap.org/img/wn/03d.png"
              className="heading__cloud"
              alt=""
            />
            <img
              src="http://openweathermap.org/img/wn/03d.png"
              className="heading__cloud"
              alt=""
            />
            <img
              src="http://openweathermap.org/img/wn/03d.png"
              className="heading__cloud"
              alt=""
            />
          </h1>
          <Form
            state={this.state}
            setCity={this.setValue}
            searchData={this.browseCity}
          />
          <Result state={this.state} />
        </div>
      </Fragment>
    );
  }
}

export default App;
