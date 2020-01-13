import React from 'react';
import HogCard from '../components/HogCard'

class HogContainter extends React.Component{
    render(){
        return(
            <div className="ui grid container">
                {
                    this.props.hogs.map(hog => {
                        return  <HogCard key={hog.id} hog={hog}/>
                    })
                }
            </div>
        )
    }
}

export default HogContainter