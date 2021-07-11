import React from "react";
import Header from "./Header";
import "./App.css";
import SearchBox from "./SearchBox";

class App extends React.Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
  };

  handleInputChange = (inputText) => {
    this.setState({ headerExpanded: inputText.length > 0 ? false : true });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
