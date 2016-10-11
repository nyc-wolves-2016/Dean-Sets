class App extends React.Component {
  constructor() {
    super();
    this.onCardClick = this.onCardClick.bind(this);
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
  componentWillMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});

      // console.log("first", this.state);
    }.bind(this));
  }

  // var newDeck = this.state.deck.filter(function(card) { return card.id != clickedCard.props.data.id; });

  onCardClick(clickedCard, newStatus) {
    var newDeck = this.state.deck.filter(card => card.id != clickedCard.props.data.id );
    var cardToUpdate = this.state.deck.find(card => card.id == clickedCard.props.data.id );

    cardToUpdate.status = newStatus;
    newDeck.push(cardToUpdate);
    this.setState({deck: newDeck});
    debugger;
    // this.props.deck.find(card => card === clickedCard)
  }

  render() {
    return(
      <div>
      {/* <Nav userData={this.state.user} onLogin={this.ufkjf} /> */}


      <Game deck={this.state.deck} uponClick={this.onCardClick}/>
      {/* <Timer /> */}
      </div>
    )
  }

}
