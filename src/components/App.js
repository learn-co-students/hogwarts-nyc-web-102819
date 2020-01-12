import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import Selection from './Selection'


class App extends Component {
  
  state = {
    greased: false,
    sortBy: 'none',
    data: hogs,
    selectedData: hogs
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("state update")
    console.log("sortBy:",this.state.sortBy)
    console.log("selected Data:",this.state.selectedData)

    
  }

  switchGreased = () => {

    if (this.state.greased) { 
        this.setState({
            greased: false,
            selectedData: this.state.data
        })
    } else {
        this.setState({
            greased: true,
            selectedData: this.state.data.filter(hog=> hog.greased)
        })
    }


  }

  switchSort = (sort) => {

    this.setState({
      sortBy: sort
    })

    switch (sort) {
      case 'name':
        
        let sortHogsName = [...hogs]
        sortHogsName.sort((a,b) => (a.name > b.name)? 1 : -1)

        this.setState({ 
          selectedData: sortHogsName 
        })
        break;
    
      case 'weight':
        let sortHogsWeight = [...hogs]
        sortHogsWeight.sort((a,b) => (a.weight > b.weight)? 1 : -1 )
        this.setState({
          selectedData: sortHogsWeight
        })
        
        break;
    
      case 'none':
        this.setState({selectedData: this.state.data})
        
        break;
    
      default:
        break;
    }

  }


   hogMap = () => this.state.selectedData.map(hog=> {
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
  
  
  render() {
    
    return (
      <div className="App" >
        < Nav />
        < Selection greased = {this.switchGreased} greasedState ={this.state.greased} sortBy = {this.switchSort} />
        <div>
        {this.hogMap()}
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