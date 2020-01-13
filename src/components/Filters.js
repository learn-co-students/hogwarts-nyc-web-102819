import React from 'react'

class Filters extends React.Component{

    render(){
        const greasedButton= this.props.greased ? "Clear filter" : "Filter by greased"
        
        return(
            <div>
                <button onClick={this.props.filterGreased}>{greasedButton}</button>
            </div>
        )
    }
}

export default Filters