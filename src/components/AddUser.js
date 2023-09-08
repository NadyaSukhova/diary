import React from "react";

class AddUser extends React.Component {
    render() {
      return (
        <form id="newUser">
            <input id="userName" placeholder="Имя:"/>
            <input id="userLogin" placeholder="Логин:"/>
            <input id="userPassword" placeholder="Пароль:" type="password"/>
            <button type="button">Подтвердить</button>
          </form>
      );
    }
  }

  export default AddUser