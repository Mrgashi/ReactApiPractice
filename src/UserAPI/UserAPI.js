import React from "react";

export default class FetchRandomUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      person: null,
      image: null,
    };
  }
  async componentDidMount() {
    const URL = "https://api.randomuser.me/";
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    this.setState({ image: this.state.person.picture.medium });
    this.setState({ reload: true });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.person) {
      return <div>Did not get a person.</div>;
    }

    return (
      <div className="randomUser">
        <div>
          <ul>
            <li> {this.state.person.name.title}</li>
            <li> {this.state.person.name.first}</li>
            <li> {this.state.person.name.last}</li>
            <div>
              <img src={this.state.image} alt="" />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
