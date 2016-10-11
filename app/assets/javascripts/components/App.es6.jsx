class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      user: {
        loggedIn: false
      }
    }
  }

  // test this!!
  onSetCreation(cards_ary) {
    new_deck = this.state.deck.filter(deck_card =>  !cards_ary.includes(deck_card));

    this.setState({deck: new_deck})
  }

  // test this!
  componentDidMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});

      console.log("first", this.state);
    }.bind(this));
  }

  render() {
    return(
      <div>
      {/* <Nav userData={this.state.user} onLogin={this.ufkjf} /> */}


      <Game data={this.state.deck}/>
      {/* <Timer /> */}
      </div>
    )
  }

}
