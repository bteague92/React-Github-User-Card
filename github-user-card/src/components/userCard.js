import React from "react";
import ReactDOM from "react-dom";

const UserCard = props => {
  return (
    <div className="userCard">
      <img src={props.image}></img>
      <h1>{props.name}</h1>

      <p>
        Profile Link: <a>{props.link}</a>
      </p>
    </div>
  );
};

export default UserCard;
