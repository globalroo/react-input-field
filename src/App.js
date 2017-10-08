import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchInput } from "src/search-input/search-input";

class App extends Component {
  onInputAvailable = ref => {
    // eslint-disable-next-line no-console
    console.log(ref);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Augmenting components using this.props.children
          </p>
        </header>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <SearchInput
            width={300}
            height={45}
            placeholder={"placeholder"}
            whenAvailable={this.onInputAvailable}
          />
        </div>
      </div>
    );
  }
}

export default App;
