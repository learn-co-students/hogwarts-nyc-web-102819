import React from 'react';
import HogDetails from './HogDetails'

class HogCard extends React.Component{
    state = {
        clicked: false
    }

    handleClick=()=>{
        this.setState({
            clicked: !this.state.clicked
        })

    }

    render(){
        const info = this.state.clicked ? "See less info" : "See more info"
        return (
            <div className="ui eight wide column">
             <h1 > {this.props.hog.name}</h1>
            <img src={`hog-imgs/${this.props.hog.name.split(' ').join('_')}.jpg`} alt={this.props.hog.name}/>
            <button onClick={this.handleClick}>{info}</button>
            {this.state.clicked && <HogDetails hog={this.props.hog}/>}
            </div>
        )
    }
}
export default HogCard