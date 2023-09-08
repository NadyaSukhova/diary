import React from "react";
import CheckUser from "./CheckUser";


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user:
    {  login: "",
      password: ""}
    }
  }
  render() {
    return (
      <aside>
        <center>
          <p>
            Для входа необходимо ввести следующую информацию:
          </p>
          <CheckUser />
        </center>
      </aside>
    );
  }
}



export default Login;
