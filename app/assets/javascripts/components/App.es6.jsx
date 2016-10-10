class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [
        {"id"=>1,
        "shape"=>"square",
        "color"=>"blue",
        "number"=>2,
        "shading"=>"solid",
        "status"=>"pending",
        "created_at"=>Mon, 10 Oct 2016 19:55:59 UTC +00:00,
        "updated_at"=>Mon, 10 Oct 2016 19:55:59 UTC +00:00},
       {"id"=>2,
        "shape"=>"square",
        "color"=>"blue",
        "number"=>2,
        "shading"=>"striped",
        "status"=>"pending",
        "created_at"=>Mon, 10 Oct 2016 19:56:31 UTC +00:00,
        "updated_at"=>Mon, 10 Oct 2016 19:56:31 UTC +00:00}
      ]
    }
  }

  // test this!
  componentDidMount() {
    $.ajax({
      url: '/cards'
    }).done(function(response) {
      this.setState({deck: response});
    }.bind(this))
  }

  render() {
    return(
      <User />


      <Game />
      <Timer />
    )
  }

}
