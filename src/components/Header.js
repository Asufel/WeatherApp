import React, { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
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
        <div className="heading__clock">
          <p className="clock__time">
            {props.state.Hours}: {props.state.Minutes}: {props.state.Seconds}
          </p>
        </div>
      </h1>
    </Fragment>
  );
};

export default Header;
