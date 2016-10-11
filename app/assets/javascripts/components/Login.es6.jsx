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
      <form ref="loginForm" onSubmit={this.loginUser}>

        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input ref="emailBox" type="text"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input ref="passwordBox" type="text"/>
        </div>

        <input type="submit" value="login"/>

      </form>
    )
  }
}
