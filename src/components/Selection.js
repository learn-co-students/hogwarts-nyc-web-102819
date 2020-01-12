import React, {Component} from 'react'


class Selection extends Component {

    render () {
        return (
            <div>
                <button onClick = {this.props.greased} > {this.props.greasedState? 'All pigs':'Greased Pigs only'} </button>
                <select onChange = {(event) => this.props.sortBy(event.target.value)}>
                    <option value="none">No Sort</option>
                    <option value="name">Sort by Name</option>
                    <option value="weight">Sort by Weight</option>
                </select>
            </div>


        )
    }
    
}

export default Selection
