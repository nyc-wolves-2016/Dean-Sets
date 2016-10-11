class Game extends React.Component {
  render() {
    let { deck } = this.props;

    return(
      <ul>
        {deck.map((card, i) =>
          <Card key={i} data={card} />
        )}
      </ul>
    )
  }
}
