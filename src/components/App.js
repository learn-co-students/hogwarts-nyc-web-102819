import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from '../HogCard';
import FilterContainer from '../FilterContainer';

class App extends Component {

  state = {
    hogs: [],
    greasedOnly: true,
    sort: 'no sort' // 'no sort', 'name', 'weight'
  }

  componentDidMount() {
    this.setState({hogs: hogs})
  }

  changeHogDirtiness = (name) => {
    let newHogs = this.state.hogs.map(hog => {
      if (hog.name === name) {hog.dirty = !hog.dirty}
      return hog
    })
    this.setState({hogs: newHogs})
  }

  selectSort = (value) => {
    this.setState({sort: value})
  }
  toggleGreased = () => {
    this.setState({greasedOnly: !this.state.greasedOnly})
  }

  displayedHogsHelper = () => {
    let displayedHogs = [...hogs]
    if (this.state.greasedOnly) {
      displayedHogs = hogs.filter(hog => hog.greased)
    }
    if (this.state.sort === 'name') {
      displayedHogs.sort((hogOne, hogTwo) => hogOne.name.localeCompare(hogTwo.name))
    }
    if (this.state.sort === 'weight') {
      displayedHogs.sort((hogOne, hogTwo) => hogOne.weight > hogTwo.weight ? 1 : -1)
    }
    return displayedHogs
  }


  render() {
    let displayedHogs = this.displayedHogsHelper()
    let cleanHogs = displayedHogs.filter(hog => !hog.dirty),
        dirtyHogs = displayedHogs.filter(hog => hog.dirty);

    return (
      <div className="App">
        < Nav />
        < FilterContainer 
          greasedOnly={this.state.greasedOnly}
          toggleGreased={this.toggleGreased}
          selectSort={this.selectSort}
        />
        <div className="padding-bottom"><h2>Main Pen</h2></div>
        <div className="ui grid container">
          {cleanHogs.map((hog, index) => {
            return (
              < HogCard toggleDirty={this.changeHogDirtiness} key={index} hog={hog}/>
            )
          })}
        </div>
        <div className="padding-bottom padding-top"><h2>Dirty Pen</h2></div>
        <div className="ui grid container">
          {dirtyHogs.map((hog, index) => {
            return (
              < HogCard toggleDirty={this.changeHogDirtiness} key={index} hog={hog}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
