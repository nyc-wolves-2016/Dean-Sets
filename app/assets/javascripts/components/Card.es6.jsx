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
    return(
      <li onClick={this.changeStatus}>
        <div className="card">
          <div className="cardfront">
            {/* <div className='pill empty red '></div>
            <div className='diamond lined purple'></div>
            <div className='circle solid green'></div> */}
            <p>{number} {shading} {color} {shape} {status}</p>
          </div>
        </div>
      </li>
    )
  }
}
