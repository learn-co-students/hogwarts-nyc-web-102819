import React from 'react';
import HogDetail from './HogDetail';

class HogCard extends React.Component {
  state = {
    clicked: false 
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    let {name} = this.props.hog
    let {toggleDirty} = this.props


    return (
      <div className="pigTile">
        <img src={`hog-imgs/${name.split(' ').join('_')}.jpg`} alt={name} />
        <div>{name}</div>
        <button onClick={() => toggleDirty(name)}>Shower Hog/Play in the Mud</button>
        <button onClick={this.handleClick}>More Info</button>
        {this.state.clicked ? <HogDetail hog={this.props.hog} /> : ""}
      </div>
    )
  }
}


export default HogCard;