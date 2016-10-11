class Card extends React.Component {



  render(){
    let { color, shape, shading, number } = this.props.data;
    return(
      <li>

        <div className="card">{number} {shading} {color} {shape}</div>
      </li>
    )
  }
}
