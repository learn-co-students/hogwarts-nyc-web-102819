import React from 'react';

const HogDetail = (props) => {
  return (
    <div>
      <div>Specialty: {props.hog.specialty}</div>
      <div>Weight: {props.hog.weight}</div>
      <div>{props.hog.greased ? 'Greased' : 'Not Greased'}</div>
      <div>Medals: {props.hog['highest medal achieved']}</div>
    </div>
  )
}

export default HogDetail;