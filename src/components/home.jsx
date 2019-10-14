import React from "react";
import "./home.css";
import Input from "./common/input";
import Submit from "./common/submit";

class Home extends React.Component {
  state = {
    query: ""
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState({ query: input.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.query);
  };

  render() {
    return (
      <div className="container search-container home-style">
        <h1>GitHub Search</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Enter username"
            value={this.state.query}
            handleChange={this.handleChange}
          />
          <Submit label="Search" />
        </form>
      </div>
    );
  }
}

export default Home;
