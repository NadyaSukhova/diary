import React from "react";
import AddUser from "./AddUser";

class Registration extends React.Component {
  render() {
    return (
      <aside>
        <center>
          <p>
            Чтобы зарегистрироваться,
            <br />
            необходимо ввести следующую информацию:
          </p>
          <AddUser />
        </center>
      </aside>
    );
  }
}

export default Registration;
