import React from "react";
import FetchRandomUser from "./UserAPI/UserAPI";

class MyComponent extends React.Component {
  state = {
    isActive: false,
  };
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.isActive ? (
          <div>
            <FetchRandomUser />
          </div>
        ) : null}
        <button onClick={this.handleShow}>show</button>
        <button onClick={this.handleHide}>hide</button>
      </div>
    );
  }
}

export default MyComponent;
