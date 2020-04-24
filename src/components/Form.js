import React, { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      <form action="" className="form" onSubmit={props.searchData}>
        <input
          type="text"
          className="form__input"
          placeholder="Wpisz miasto..."
          value={props.state.chosenCity}
          onChange={props.setCity}
        />
        <button className="form__button">
          Szukaj<span className="button__animated"></span>
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
