import React from "react";
import { Link } from "react-router-dom";
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
    const { query } = this.state;
    return (
      <div className="container search-container home-style">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="GitHub search"
          width="200px"
          height="auto"
        />
        <h1>GitHub Search</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Enter username"
            value={query}
            handleChange={this.handleChange}
          />
          <Link to={`/${query}`}>
            <Submit label="Search" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
