class Nav extends React.Component {
  constructor() {
    super();
    this.updateLogin = this.updateLogin.bind(this);
  }

  componentDidMount() {
  }

  updateLogin(response) {
    response["loggedIn"] = true
    this.setState({user: response})
  }

  render() {
    if (this.props.user.loggedIn) {
      return (
        <nav>
          <ul className="loggedin-nav-ul">
            <li className="loggedin-nav-li"><a href={'/users/' + this.props.user.id}>{this.props.user.username}</a></li>
            <li className="loggedin-nav-li"><a href="/users/logout">logout</a></li>
          </ul>
        </nav>
      )
    }
    else {
      return (
        <nav>
          <ul className="loggedout-nav-ul">
            <li className="loggedout-nav-li"><NewUser registerComplete={this.props.updateNewUser}/></li>
            <li className="loggedout-nav-li"><Login loginComplete={this.updateLogin}/></li>
          </ul>
        </nav>
      )
    }
  }
}
