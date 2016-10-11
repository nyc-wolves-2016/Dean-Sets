class Game extends React.Component {
  render() {
    let { deck } = this.props;

    return(
      <ol>
        {deck.map((card, i) =>
          <Card key={i} data={card} />
        )}
      </ol>
    )
  }
}
