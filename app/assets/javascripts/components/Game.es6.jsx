class Game extends React.Component {

  constructor() {
    super();

  }

  // change card's status


  render() {
    let { deck } = this.props;

    

    return(
      <ul>
        {deck.map((card, i) =>
          <Card key={i} data={card} uponClick={this.props.uponClick}/>
        )}
      </ul>
    )
  }
}
