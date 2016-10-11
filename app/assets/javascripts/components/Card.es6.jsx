class Card extends React.Component {
  render(){
    let { color, shape, shading, number } = this.props.data;
    return(
      <li>
        <p>{number} {shading} {color} {shape}</p>
      </li>
    )
  }
}
