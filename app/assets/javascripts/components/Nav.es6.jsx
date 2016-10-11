class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.updateNewUser = this.updateNewUser.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "/users/login",
      method: "GET"
    })
    .done(function(response) {
      response["loggedIn"] = true
      this.setState({user: response})
    }.bind(this))
  }

  updateNewUser(response) {
    response["loggedIn"] = true
    this.setState({user: response})
  }

  updateLogin(response) {
    response["loggedIn"] = true
    this.setState({user: response})
  }

  render() {
    if (this.state.user.loggedIn) {
      return (
        <nav>
          {/* <a href="/users/{this.state.user.id}">{this.state.user.username}</a><br></br> */}
          <a href="/users/logout">logout</a><br></br>
          <a href="/">home</a>
        </nav>
      )
    }
    else {
      return (
        <nav>
          <NewUser registerComplete={this.updateNewUser}/><br></br><br></br>
          <Login loginComplete={this.updateLogin}/><br></br><br></br>
          <a href="/">home</a>
        </nav>
      )
    }
  }
}
