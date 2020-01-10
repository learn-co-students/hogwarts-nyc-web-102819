import React, { Component } from 'react';



class Faceup extends Component {



    render() {




        return <div className = "">
                    <h1>{this.props.name}</h1>
                    <img src={process.env.PUBLIC_URL + `${this.props.name.split(" ").join("_")}.jpg`}  alt={this.props.name} />
                    <br />
                    <br />
                </div>
            
            
        }
    }
    
    export default Faceup
/*
<h3>Specialty: {this.props.specialty}</h3>
<h3>Greased: {
    this.props.greased? "greased": "Not greased"}</h3>
<h3>Weight:{this.props.weight}</h3>
<h3>Medals: {this.props.medal}</h3>
*/