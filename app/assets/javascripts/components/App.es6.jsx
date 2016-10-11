class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // deck: [
      //   {"id"=>1,
      //   "shape"=>"square",
      //   "color"=>"blue",
      //   "number"=>2,
      //   "shading"=>"solid",
      //   "status"=>"pending",
      //   "created_at"=>Mon, 10 Oct 2016 19:55:59 UTC +00:00,
      //   "updated_at"=>Mon, 10 Oct 2016 19:55:59 UTC +00:00},
      //  {"id"=>2,
      //   "shape"=>"square",
      //   "color"=>"blue",
      //   "number"=>2,
      //   "shading"=>"striped",
      //   "status"=>"pending",
      //   "created_at"=>Mon, 10 Oct 2016 19:56:31 UTC +00:00,
      //   "updated_at"=>Mon, 10 Oct 2016 19:56:31 UTC +00:00}
      // ]
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
  componentDidMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});

      console.log("first", this.state);
    }.bind(this));
  }

  render() {
    return(
      <div>
      {/* <Nav userData={this.state.user} onLogin={this.ufkjf} /> */}


      <Game data={this.state.deck}/>
      {/* <Timer /> */}
      </div>
    )
  }

}
