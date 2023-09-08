import React from "react";
import Login from "./components/Login";
import Hello from "./components/Hello";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <Hello />
        <button onClick={this.checkMySQL()}/>
      </div>
    );
  }
  checkMySQL() {
  }
}

export default App;
