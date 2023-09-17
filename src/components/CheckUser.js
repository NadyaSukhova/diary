import React from "react";

class CheckUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  render() {
    return (
      <aside id="Login">
        <center>
      <div id="CheckUser">
        <p>
          Для входа необходимо
          <br />
          ввести следующую информацию:
        </p>
        <form>
          <input
            id="userLogin"
            placeholder="Логин:"
            onChange={(el) => this.setState({ login: el.target.value })}
          />
          <input
            id="userPassword"
            placeholder="Пароль:"
            type="password"
            onChange={(el) => this.setState({ password: el.target.value })}
          />
          <button
            type="button"
            onClick={() =>
              this.props.CheckLogPass(
                this.props.users,
                this.state.login,
                this.state.password
              )
            }
          >
            Подтвердить
          </button>
        </form>
      </div>
      </center>
      </aside>
    );
  }
}

export default CheckUser;
