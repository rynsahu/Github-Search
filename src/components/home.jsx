import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container search-container home-style">
        <h1>GitHub Search</h1>
        <form>
          <input
            type="text"
            class="form-control"
            placeholder="Enter username"
          />
        </form>
      </div>
    );
  }
}

export default Home;
