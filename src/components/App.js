import React, { Fragment, Component } from "react";
import "./App.css";
import Result from "./Result";
import Form from "./Form";
import Header from "./Header";

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
    Hours: "",
    Minutes: "",
    Seconds: "",
    cityHours: "",
    cityMinutes: "",
    citySeconds: "",
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.clock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  clock() {
    const Time = new Date();

    const tajm = (Time.getTime() / 1000).toFixed(0);
    const tajm2 = parseInt(tajm);
    const timeZone = this.state.timezone;

    const cityTime = new Date(tajm2 * 1000 + timeZone * 1000 - 7200 * 1000);
    // console.log(TEA);

    const cityHours =
      cityTime.getHours() < 10
        ? "0" + cityTime.getHours()
        : cityTime.getHours();
    const cityMinutes =
      cityTime.getMinutes() < 10
        ? "0" + cityTime.getMinutes()
        : cityTime.getMinutes();
    const citySeconds =
      cityTime.getSeconds() < 10
        ? "0" + cityTime.getSeconds()
        : cityTime.getSeconds();

    const Hours =
      Time.getHours() < 10 ? "0" + Time.getHours() : Time.getHours();
    const Minutes =
      Time.getMinutes() < 10 ? "0" + Time.getMinutes() : Time.getMinutes();
    const Seconds =
      Time.getSeconds() < 10 ? "0" + Time.getSeconds() : Time.getSeconds();

    this.setState({
      Hours,
      Minutes,
      Seconds,
      cityHours,
      cityMinutes,
      citySeconds,
    });
  }

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
          <Header state={this.state} />
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
