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
        <p>{number} {shading} {color} {shape} {status}</p>
      </li>
    )
  }
}
