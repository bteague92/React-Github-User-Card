import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import UserCard from "./components/userCard.js";

class App extends React.Component {
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/bteague92`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    //// conditional that causes rerender upon changes
  }

  render() {
    return (
      <div>
        <UserCard />
      </div>
    );
  }
}

export default App;
