import React from "react";
import 'mysql'

class CheckUser extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      login: "",
      password: ""
    }
  }
    render() {
      return (
        <form id="checkUser">
            <input id="userLogin" placeholder="Логин:" onChange={(el) => this.setState({login: el.target.value})}/>
            <input id="userPassword" placeholder="Пароль:" type="password" onChange={(el) => this.setState({password: el.target.value})}/>
            <button type="button" onClick={ this.props.checkLogin({
              login: this.state.login,
              password: this.state.password
            }) }>Подтвердить</button>
          </form>
      );
    }
  }

  export default CheckUser