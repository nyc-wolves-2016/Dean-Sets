class Card extends React.Component {



  render(){
    let { color, shape, shading, number } = this.props.data;
    return(
      <li>
        <div className="card"><div className='circle striped red'></div><div className='oval striped red'></div></div>
      </li>
    )
  }
}
