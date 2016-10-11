class Card extends React.Component {



  render(){
    let { color, shape, shading, number } = this.props.data;
    return(
      <li>
        <div className="card highlight">
          <div className="cardfront">
            <div className='pill empty red '></div>
            <div className='diamond lined purple'></div>
            <div className='circle solid green'></div>
          </div>
        </div>
      </li>
    )
  }
}
