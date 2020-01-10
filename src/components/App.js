import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'

class App extends Component {
  
  state = {
    greased: false
  }

  switchGreased = () => {
    console.log("click")
    if (this.state.greased) { 
        this.setState({
            greased: false
        })
    } else {
        this.setState({
            greased: true
        })
    }
    console.log(`${this.state.greased}`)
  }


   hogMap = () => hogs.map(hog=> {
    return (
      < Hog 
        name= {hog.name} 
        specialty= {hog.specialty} 
        greased= {hog.greased} 
        weight= {hog.weight} 
        medal= {hog['highest medal achieved']} 
      />
      )
    })

    hogFilter = () => {
      
      let x = hogs.filter(hog=> hog.greased)
      let y = x.map(hog=> {
        return (
        < Hog 
          name= {hog.name} 
          specialty= {hog.specialty} 
          greased= {hog.greased} 
          weight= {hog.weight} 
          medal= {hog['highest medal achieved']} 
        />
        )
      })
      return y
    } 
  
  
  
  render() {
    
    return (
      <div className="App" >
        < Nav greased = {this.switchGreased} greasedState ={this.state.greased} />
        
        <div>
        {this.state.greased? this.hogFilter() : this.hogMap()}
        </div>
          

      </div>
    )
  }
}

export default App;
  
/*
{
  name: 'Mudblood',
  specialty: 'Mediocre magic',
  greased: false,
  weight: 2.0,
  'highest medal achieved': 'bronze'
}
*/