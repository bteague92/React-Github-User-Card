import React from "react";
import ReactDOM from "react-dom";

const UserCard = props => {

  const clickHandler = () => {
    props.setMPerson(props.name);
  }

  return (
    <div onClick={clickHandler} className="userCard">
      <img src={props.img}></img>
      <h1>{props.name}</h1>

      <p>
        Profile Link: <a>{props.link}</a>
      </p>
    </div>
  );
};

export default UserCard;
