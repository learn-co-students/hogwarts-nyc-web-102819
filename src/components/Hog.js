import React, { Component } from 'react';



class Hog extends Component {

    state = {
        faceup: true
    }

    switchFace = () => {
        console.log("click")
        if (this.state.faceup) { 
            this.setState({
                faceup: false
            })
        } else {
            this.setState({
                faceup: true
            })
        }
    }
    

    render() {

        // pigSwaggerinoDoubleDutchExcellent = () => {


        // }


        return <div onClick = {() => this.switchFace()} className = "pigTile" >
                    
                    {this.state.faceup
                    ? <div >
                        <h1>{this.props.name}</h1>
                        <img src={process.env.PUBLIC_URL + `${this.props.name.split(" ").join("_")}.jpg`}  alt={this.props.name} />
                    </div>
                    : <div>
                        <h1>{this.props.name}</h1>
                        <h3>Specialty: {this.props.specialty}</h3>
                        <h3>Greased: {
                            this.props.greased? "greased": "Not greased"}</h3>
                        <h3>Weight:{this.props.weight}</h3>
                        <h3>Medals: {this.props.medal}</h3>
                    </div>}

                
                    
                </div>
            
            
        }
    }
    
    export default Hog
/*
<h3>Specialty: {this.props.specialty}</h3>
<h3>Greased: {
    this.props.greased? "greased": "Not greased"}</h3>
<h3>Weight:{this.props.weight}</h3>
<h3>Medals: {this.props.medal}</h3>
*/