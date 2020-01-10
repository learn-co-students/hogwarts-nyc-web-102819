import React, { Component } from 'react';



class Facedown extends Component {



    render() {




        return <div className = "">
                    <h1>{this.props.name}</h1>
                    <h3>Specialty: {this.props.specialty}</h3>
                    <h3>Greased: {
                        this.props.greased? "greased": "Not greased"}</h3>
                    <h3>Weight:{this.props.weight}</h3>
                    <h3>Medals: {this.props.medal}</h3>

                    <br />
                    <br />
                </div>
            
            
        }
    }
    
    export default Facedown
