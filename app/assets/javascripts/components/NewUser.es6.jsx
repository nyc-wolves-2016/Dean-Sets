class NewUser extends React.Component {
  constructor() {
    super();
    this.registerUser = this.registerUser.bind(this)
  }

  registerUser(event) {
    event.preventDefault();
    var username = this.refs.usernameBox.value;
    var email = this.refs.emailBox.value;
    var password = this.refs.passwordBox.value;
    var user = { username, email, password };
    var data = { user }
    $.ajax({
      url: "/users",
      method: "POST",
      data: data
    })
    .done(function(response) {
      this.props.registerComplete(response);
    }.bind(this))
  }

  render() {
    return (
      <div className="register-div">
        <h3 className="register-header">REGISTER</h3>
        <form ref="registerForm" onSubmit={this.registerUser}>
          <ul className="register-ul">
            <li className="register-li"><div className="form-group">
              <input ref="usernameBox" type="text" placeholder="username"/>
            </div></li>

            <li className="register-li"><div className="form-group">
              <input ref="emailBox" type="text" placeholder="email"/>
            </div></li>

            <li className="register-li"><div className="form-group">
              <input ref="passwordBox" type="password" placeholder="password"/>
            </div></li>

            <li className="register-li register-button"><input type="submit" value="register"/></li>
          </ul>
        </form>
      </div>
    )
  }
}
