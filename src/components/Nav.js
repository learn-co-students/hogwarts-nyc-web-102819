import piggy from '../porco.png'
import React, { Component } from 'react';


class Nav extends Component {
	render () {
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<button onClick = {this.props.greased} > Greased filter: {`${this.props.greasedState}`} </button>
			</div>
		)
	}
}

export default Nav
