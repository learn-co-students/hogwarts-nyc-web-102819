import React, {Component} from 'react';

class FilterContainer extends Component {
  
  render() {
    return(
      <div className="padding-bottom">
        <button onClick={this.props.toggleGreased}>
          {this.props.greasedOnly ? "Show All Hogs" : "Show Greased Hogs"}
        </button>
        <select onChange={(e) => this.props.selectSort(e.target.value)}>
          <option value="no sort">No sort</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default FilterContainer;