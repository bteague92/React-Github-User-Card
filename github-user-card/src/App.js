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
    mainImg: "",
    mainName: "",
    mainBio: "",
    mainLocation: "",
    mainFollowers: "",
    mainFollowing: "",
    mainLink: "",

    user: "",
    image: "",
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
          data: res.data,
          mainImg: res.data.avatar_url,
          mainName: res.data.name,
          mainBio: res.data.bio,
          mainLocation: res.data.location,
          mainFollowers: res.data.followers,
          mainFollowing: res.data.following,
          mainLink: res.data.html_url
        });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/bteague92/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          mainFollowersArr: res.data
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
        <MainUserCard
          image={this.state.mainImg}
          name={this.state.mainName}
          bio={this.state.mainBio}
          location={this.state.mainLocation}
          foloweres={this.state.mainFollowers}
          following={this.state.mainFollowing}
          link={this.state.mainLink}
        />
        {this.state.mainFollowersArr.map(f => (
          // this.setState({
          //   image: f.avatar_url,
          //   name: f.name,
          //   bio: f.bio,
          //   location: f.location,
          //   followers: f.followers,
          //   following: f.following,
          //   link: f.html_url
          // })

          <UserCard
            image={f.avatar_url}
            name={f.name}
            bio={f.bio}
            location={f.location}
            foloweres={f.followers}
            following={f.following}
            link={f.html_url}
          />

          // <UserCard
          //   image={this.state.image}
          //   name={this.state.name}
          //   bio={this.state.bio}
          //   location={this.state.location}
          //   foloweres={this.state.followers}
          //   following={this.state.following}
          //   link={this.state.link}
          // />
        ))}
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
