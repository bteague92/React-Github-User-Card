import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import UserCard from "./components/userCard.js";
import MainUserCard from "./components/mainUserCard.js";

class App extends React.Component {
  state = {
    data: [],
    mainUser: "",
    mainFollowersArr: [],
    mainName: "",
    mainBio: "",
    mainLocation: "",
    mainFollowers: "",
    mainFollowing: "",
    mainLink: "",
    followersArr: [],
    user: "",
    name: "",
    bio: "",
    location: "",
    followers: "",
    following: "",
    link: ""
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/bteague92`)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    //// conditional that causes rerender upon changes
  }

  clickHandler() {
    ///// when a profile is clicked
  }

  submitHandler() {
    //// when a username is submitted
  }

  render() {
    return (
      <div>
        {/* <MainUserCard 
        image={this.state.mainImage}
        name={this.state.mainName}
        bio={this.state.mainBio}
        location={this.state.mainLocation}
        foloweres={this.state.mainFollowers}
        following={this.state.mainFollowing}
        link={this.state.mainLink}
        /> */}
        {/* <UserCard 
        image={this.state.image}
        name={this.state.name}
        bio={this.state.bio}
        location={this.state.location}
        foloweres={this.state.followers}
        following={this.state.following}
        link={this.state.link}
        /> */}
      </div>
    );
  }
}

export default App;
