import React from "react";
import { getData } from "../services/httpService";

class KnowledgePanel extends React.Component {
  state = {
    name: "",
    profile_url: "",
    avatar_url: ""
  };

  componentDidMount() {
    this.getAllData();
  }

  getAllData = async () => {
    const { match } = this.props;

    const { data } = await getData(match.params.id);
    console.log(data);

    this.setState({
      profile_url: data.html_url,
      avatar_url: data.avatar_url,
      name: data.name
    });
  };

  render() {
    const { name, profile_url, avatar_url } = this.state;
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Welcome to knowledge panel</h1>
          <img src={avatar_url} alt={name} width="200px" height="200px" />
          <h2>
            <a href={profile_url} target="_blanck">
              {name}
            </a>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default KnowledgePanel;
