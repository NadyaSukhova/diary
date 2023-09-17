import React from "react";
import CheckUser from "./components/CheckUser";
import Hello from "./components/Hello";
import Notes from "./components/Notes";
import data from "./Users.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.CheckLogPass = this.CheckLogPass.bind(this);
    this.state = {
      users: [data],
      checked: false,
      name: "",
    };
  }

  CheckLogPass(data, login, password) {
    var el = {};
    if (login && password) {
      el = data.find((element) => {
        return element.login === login;
      });
      if (el) {
        if (el.password === password) {
          this.setState({ checked: true });
          this.setState({ name: el.name });
        } else {
          alert("Неправильный пароль!");
        }
      } else {
        alert("Такого пользователя не существует!");
      }
    } else {
      alert("Пожалуйста, введите логин и пароль!");
    }
  }

  render() {
    if (this.state.checked) {
      return (
        <div>
          <Hello name={this.state.name} />
          <Notes users={this.state.users} />
        </div>
      );
    } else {
      return (
        <div>
          <Hello />
          <CheckUser
            users={this.state.users}
            CheckLogPass={this.CheckLogPass}
          />
        </div>
      );
    }
  }
}

export default App;
