class Login extends React.Component {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this)
  }

  loginUser(event) {
    event.preventDefault();
    var email = this.refs.emailBox.value;
    var password = this.refs.passwordBox.value;
    var user = { email, password };
    var data = { user }
    $.ajax({
      url: "/users/login",
      method: "POST",
      data: data
    })
    .done(function(response) {
      this.props.loginComplete(response);
    }.bind(this))
  }

  render() {
    return (
      <div className="login-div">
        <h3 className="login-header">LOGIN</h3>
        <form ref="loginForm" onSubmit={this.loginUser}>
          <ul className="login-ul">

            <li className="login-li"><div className="form-group">
              <input ref="emailBox" type="text" placeholder="email"/>
            </div></li>

            <li className="login-li"><div className="form-group">
              <input ref="passwordBox" type="password" placeholder="password"/>
            </div></li>

            <li className="login-li login-button"><input type="submit" value="login"/></li>
          </ul>
        </form>
      </div>
    )
  }
}
