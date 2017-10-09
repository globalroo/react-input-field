import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchInput } from "src/search-input/search-input";

const styles = {
  appContainer: { display: "flex", justifyContent: "center", marginTop: 50 }
};

const SEARCH_INPUT_WIDTH = 300;
const SEARCH_INPUT_HEIGHT = 45;
const SEARCH_INPUT_PLACEHOLDER = "placeholder";

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
            A React &quot;CSS in JS&quot; version of the HTML5 input search
            type.<br />
            <small>
              Uses a component that injects mouseover / mouseleave state into
              this.props.children to enable :hover effect via cloneElement
            </small>
          </p>
        </header>
        <div style={styles.appContainer}>
          <SearchInput
            width={SEARCH_INPUT_WIDTH}
            height={SEARCH_INPUT_HEIGHT}
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            whenAvailable={this.onInputAvailable}
          />
        </div>
      </div>
    );
  }
}

export default App;
