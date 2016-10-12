class Card extends React.Component {
  constructor() {
    super();
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    if (this.props.data.status == "selected") {
      this.props.uponClick(this, "onBoard");
    } else {
      this.props.uponClick(this, "selected");
    }
  }


  render(){
    let { color, shape, shading, number, status } = this.props.data;

    var cardDisplay = classNames( color, shape, shading);
    var cardClasses = classNames ("card", status);
    var rows = [];
    for (var i=0; i < number; i++) {
      rows.push(number);
    }

    return(
      <li onClick={this.changeStatus}>
        <div className={ cardClasses}>
          <div className="cardfront">
            {rows.map((card, i) =>
              <div className= {cardDisplay} key={i}></div>
            )}
          </div>
        </div>
      </li>
    )
  }
}
