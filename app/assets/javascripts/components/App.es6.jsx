class App extends React.Component {
  constructor() {
    super();
    this.onCardClick = this.onCardClick.bind(this);
    this.state = {
      deck: [],
      // user: {
      //   loggedIn: false
      // }
    }
  }

  onSetCreation(cards_ary) {
    new_deck = this.state.deck.filter(deck_card =>  !cards_ary.includes(deck_card));

    this.setState({deck: new_deck})
  }

  componentWillMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});
    }.bind(this));
  }

  onCardClick(clickedCard, newStatus) {
    var newDeck = this.state.deck.filter(card => card.id != clickedCard.props.data.id );
    var cardToUpdate = this.state.deck.find(card => card.id == clickedCard.props.data.id );

    cardToUpdate.status = newStatus;
    newDeck.push(cardToUpdate);
    this.setState({deck: newDeck});
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
