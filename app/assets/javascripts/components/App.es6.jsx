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
  // onSetCreation(cards_ary) {
  //   cards_ary.forEach(card => {
  //     this.prevState.deck.forEach((deck_card, idx) => {
  //       if (card === deck_card) {
  //         this.prevState.deck.splice(idx, 1);
  //       }
  //     })
  //   })
  //   this.setState(deck: this.prevState.deck)
  // }

  // test this!
  componentDidMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});
    }.bind(this))
  }

  render() {
    return(
      <div>
      <Nav userData={this.state.user} onLogin={this.ufkjf} />


      {/* <Game data={this.state.deck}/> */}
      {/* <Timer /> */}
      </div>
    )
  }

}
