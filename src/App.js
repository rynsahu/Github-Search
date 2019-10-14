import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import KnowledgePanel from "./components/knowledgePanel";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/:id" component={KnowledgePanel} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
