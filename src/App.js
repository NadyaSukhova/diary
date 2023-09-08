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
        <Login />
      </div>
    );
  }
}

export default App;
