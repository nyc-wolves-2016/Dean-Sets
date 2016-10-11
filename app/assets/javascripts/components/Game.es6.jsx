class Game extends React.Component {

  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // change card's status
  onButtonClick() {
    // hit up ya boi controller for possible combos

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

        <input type="button" name="ImaButton" onClick={this.onButtonClick} />
      </div>
    )
  }
}
