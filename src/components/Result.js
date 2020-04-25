import React, { Fragment } from "react";

const Result = (props) => {
  const {
    temp,
    feelsTemp,
    humidity,
    clouds,
    wind,
    icon,
    pressure,
    country,
    err,
    city,
    sunrise,
    sunset,
    chosenCity,
    timezone,
    cityHours,
    cityMinutes,
    citySeconds,
  } = props.state;

  let sunriseTime = new Date(
    sunrise * 1000 + timezone * 1000 - 7200 * 1000
  ).toLocaleTimeString();
  let sunsetTime = new Date(
    sunset * 1000 + timezone * 1000 - 7200 * 1000
  ).toLocaleTimeString();

  return (
    <Fragment>
      {err === false && city.length > 0 ? (
        <section className="cityParameters">
          <div className="cityParameters__parameter">
            <img
              src={`https://www.countryflags.io/${country}/shiny/64.png`}
              alt="flag"
            />
            <h2 className="parameter__cityName">{city}</h2>{" "}
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="weather__icon"
            />
          </div>
          <div className="cityParameters__parameter">
            {cityHours === "" ? null : (
              <>
                <p>Czas</p>
                <p>
                  <strong>
                    {props.state.cityHours}: {props.state.cityMinutes}:{" "}
                    {props.state.citySeconds}
                  </strong>
                  <i className="far fa-clock"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {temp === "" ? null : (
              <>
                <p> Temp.</p>
                <p>
                  <strong>{temp}&#176;C</strong>
                  <i className="fas fa-thermometer-half"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {feelsTemp === "" ? null : (
              <>
                <p>Temp.odczuwalna</p>
                <p>
                  <strong>{feelsTemp}&#176;C</strong>
                  <i className="fas fa-thermometer-half"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {wind === "" ? null : (
              <>
                <p>Pręd.wiatru</p>
                <p>
                  <strong>{wind} m/s</strong>
                  <i className="fas fa-wind"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {humidity === "" ? null : (
              <>
                <p>Wilgotność</p>
                <p>
                  <strong>{humidity} %</strong>
                  <i className="fas fa-tint"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {pressure === "" ? null : (
              <>
                <p>Ciśnienie</p>
                <p>
                  <strong>{pressure} hPa</strong>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {clouds === "" ? null : (
              <>
                <p>Zachmurzenie</p>
                <p>
                  <strong>{clouds} %</strong>
                  <i className="fas fa-cloud"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {sunrise === "" ? null : (
              <>
                <p>Wschód słońca</p>
                <p>
                  <strong>{sunriseTime}</strong>
                  <i className="fas fa-sun"></i>
                </p>
              </>
            )}
          </div>
          <div className="cityParameters__parameter">
            {sunset === "" ? null : (
              <>
                <p>Zachód słońca</p>
                <p>
                  <strong>{sunsetTime}</strong>
                  <i className="fas fa-moon"></i>
                </p>
              </>
            )}
          </div>
        </section>
      ) : (
        <p className={chosenCity !== "" && err === true ? "error" : null}>
          {chosenCity !== "" && err === true
            ? `Nie ma danych dla wyrażenia "${chosenCity}"`
            : null}
        </p>
      )}
    </Fragment>
  );
};

export default Result;
