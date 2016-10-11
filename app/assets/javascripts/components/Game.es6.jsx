class Game extends React.Component {

  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    var onBoardCards = this.props.deck.filter(card => card.status == "selected" || card.status == "onBoard");
    var inDeckCards = this.props.deck.filter(card => card.status == "pending");

    $.ajax({
      url: '/games/card_combos',
      data: {cards: {cards_ary: onBoardCards}}
    }).done(function(response) {
      var isAdded = checkBoardAndAddCards(response, inDeckCards);
      if (isAdded==true) {
        this.forceUpdate();
      } else {
        alert('Keep looking!');
      }
      debugger;
    }.bind(this));

  }

  render() {
    let { deck } = this.props;

    var onBoardCards = deck.filter(card => card.status == "selected" || card.status == "onBoard");
    var inDeckCards = deck.filter(card => card.status == "pending");

    if (onBoardCards.length == 0) {
      addNineCards(inDeckCards);
    } else if (onBoardCards.length < 9) {
      addThreeCards(inDeckCards);
    }

    var cardsToDisplay = deck.filter(card => card.status == "selected" || card.status == "onBoard");

    return(
      <div>
        <ul>
          {cardsToDisplay.map((card, i) =>
            <Card key={i} data={card} uponClick={this.props.uponClick}/>
          )}
        </ul>

        <input type="button" value="deyAintNoSets" onClick={this.onButtonClick} />
      </div>
    )
  }
}
