import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/userCard.js";
import MainUserCard from "./components/mainUserCard.js";
import Header from "./components/header";
import Search from "./components/search";

const App = () => {

  const [followers, setFollowers] = useState([]);
  const [mPerson, setMPerson] = useState('bteague92');
  const [mPersonData, setMPersonData] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${mPerson}`)
      .then(res => {
        console.log("reData", res.data);
        setMPersonData(res.data);
      })
      .catch(err => console.log(err));
  }, [mPerson]);


  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${mPerson}/followers`)
      .then(res => {
        console.log(res.data);
        setFollowers(res.data);
      });
  }, [mPerson]);

  return (
    <div className="allCards">
      <div className="topCard">
        <Header />
        <Search setMPerson={setMPerson} />
        <MainUserCard name={mPersonData.name} pic={mPersonData.avatar_url} bio={mPersonData.bio} link={mPersonData.html_url} followers={mPersonData.followers} following={mPersonData.following} location={mPersonData.location} username={mPersonData.login} />
      </div>
      <div>
        <h1 className="followersLine">{mPersonData.name}'s Followers:({followers.length})</h1>
        <h2 className="clickLine">(click one and see what happens)</h2>
      </div>
      <div className="userCards">
        {followers.map(f => (
          <UserCard setMPerson={setMPerson} user={f} img={f.avatar_url} name={f.login} link={f.html_url} />
        ))}
      </div>
    </div >
  );
}

export default App;
