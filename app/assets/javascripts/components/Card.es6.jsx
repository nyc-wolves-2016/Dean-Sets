class Card extends React.Component {



  render(){
    let { color, shape, shading, number } = this.props.data;
    return(
      <li>
        <div className="card">
          <div className="cardfront">

            <div className='diamond full green'></div>
            <div className='diamond striped green'></div>
            <div className='diamond green'></div>
          </div>
        </div>
      </li>
    )
  }
}
