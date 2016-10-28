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
    }.bind(this));

  }




  render() {
    let { deck } = this.props;

    if (deck !== []) {

      var onBoardCards = deck.filter(card => card.status == "selected" || card.status == "onBoard");
      var inDeckCards = deck.filter(card => card.status == "pending");

      if (onBoardCards.length == 0) {
        var possibleGameOver = addNineCards(inDeckCards);
        if (possibleGameOver == false) {
          if (!this.props.firstGo) {
            this.props.gameSaver();
            alert('Game over!');
          }
        }
      } else if (onBoardCards.length < 9) {
        var possibleGameOver = addThreeCards(inDeckCards);
        if (possibleGameOver == false ) {
          var onBoardCards = deck.filter(card => card.status == "selected" || card.status == "onBoard");

          $.ajax({
            url: '/games/card_combos',
            data: {cards: {cards_ary: onBoardCards}}
          }).done(function(response) {
            if (gameOver(response)){
              this.props.gameSaver();
              alert('Game over!');
            }
          }.bind(this))
        }
      } else if (deck.length == 9 && deck.length==9) {
        var onBoardCards = deck.filter(card => card.status == "selected" || card.status == "onBoard");

        $.ajax({
          url: '/games/card_combos',
          data: {cards: {cards_ary: onBoardCards}}
        }).done(function(response) {
          if (gameOver(response)){
            this.props.gameSaver();
            alert('Game over!');
          }
        }.bind(this))
      } else if (onBoardCards.length == 12 && deck.length==12) {
        $.ajax({
          url: '/games/card_combos',
          data: {cards: {cards_ary: onBoardCards}}
        }).done(function(response) {
          if (gameOver(response)){
            this.props.gameSaver();
            alert('Game over!');
          }
        }.bind(this))
      }
    }

    var cardsToDisplay = deck.filter(card => card.status == "selected" || card.status == "onBoard");

    return(
      <div className="board">
        <ul>
          {cardsToDisplay.map((card, i) =>
            <Card key={i} data={card} uponClick={this.props.uponClick}/>
          )}
        </ul>

        <input className="noSets red-button" type="button" value="No Possible Sets" onClick={this.onButtonClick} />
        <button type="button" className="noSets red-button" ><a href="/">Quit</a></button>
      </div>

    )
  }
}
