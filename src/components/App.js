import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainter from './HogContainer';
import Filters from './Filters'
class App extends Component {
 
  state = {
    hogs: [],
    greased: false
  }

  componentDidMount(){
    this.setState({ hogs: hogs})
  }
  
  filterGreased=()=>{
    let displayHogs = [...hogs]
    if(this.state.greased){
      displayHogs = displayHogs.filter(hog => {
        return hog.greased
      })
    }
  }

  render() {
  
    return (
      <div className="App">
          < Nav />
          <Filters filterGreased={this.filterGreased} greased={this.state.greased}/>
          <HogContainter hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
