class Game extends React.Component {

  constructor() {
    super();
    // this.onCardClick = this.onCardClick.bind(this);
  }



  render() {
    let { deck } = this.props;

    return(
      <div className="board">
      <div className='diamond striped green'></div>
        <ul>
          {deck.map((card, i) =>
            <Card key={i} data={card} />
          )}
        </ul>
      </div>
    )
  }
}
