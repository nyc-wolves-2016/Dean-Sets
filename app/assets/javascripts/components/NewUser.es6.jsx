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
      <form ref="registerForm" onSubmit={this.registerUser}>

        <div className="form-group">
          <label htmlFor="username">username:</label>
          <input ref="usernameBox" type="text"/>
        </div>

        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input ref="emailBox" type="text"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input ref="passwordBox" type="text"/>
        </div>

        <input type="submit" value="register"/>

      </form>
    )
  }
}
