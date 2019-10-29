import React from "react";
import ReactDOM from "react-dom";

const MainUserCard = props => {
  return (
    <div className="mainCard">
      <img src={props.image}></img>
      <h1>{props.name}</h1>
      <h2>{props.bio}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Followers: {props.followers}</h4>
      <h4>Following: {props.following}</h4>
      <p>
        Profile Link: <a>{props.link}</a>
      </p>
    </div>
  );
};

export default MainUserCard;
