import React from 'react'

class HogDetails extends React.Component{
    render(){
        console.log("hog details oututttput")
        return( 
            <div>
                <h1>Specialty: {this.props.hog.specialty}</h1>
                <h1>Greased? {this.props.hog.greased}</h1>
                <h1>Weight: {this.props.hog.weight}</h1>
                <h1>Medals: {this.props.hog['highest medal achieved']}</h1>
            </div>
        )
    }
}

export default HogDetails