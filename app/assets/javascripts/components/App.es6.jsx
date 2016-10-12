class App extends React.Component {
  constructor() {
    super();
    this.onCardClick = this.onCardClick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.state = {
      deck: [],
      gameStart: false
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

    var selectedCards = hasSelectedSet(newDeck);
    if (selectedCards) {
      if (validSet(selectedCards)) {
        var newestDeck = newDeck.filter(card => card.status != "selected" );
        alert("Dawg, you so smart!");
        this.setState({deck: newestDeck});
      } else {
        alert("That's not a valid set, dawg.");
        newDeck.forEach(function(card) { if (card.status=="selected") { card.status = "onBoard"; }});
        this.setState({deck: newDeck});
      }
    } else {
      this.setState({deck: newDeck});
    }

  }

  startGame() {
    this.setState({gameStart: true});
  }

  render() {

    if (this.state.gameStart) {
      return(
        <div>
          <Nav />

          <Game deck={this.state.deck} uponClick={this.onCardClick}/>
          <Timer start={Date.now()} />

        </div>
      )
    } else {
      return(
        <div>
          <Nav />

          <input type="button" value="Start Game" onClick={this.startGame} />
          <Instructions />

        </div>
      )
    }

  }

}
