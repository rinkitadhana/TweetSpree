import React from "react";
import axios from "axios";
import Post from "../parts/Post";

class Advice extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="">
        <Post advice={this.state.advice} />

        <button className="" onClick={this.fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    );
  }
}

export default Advice;
