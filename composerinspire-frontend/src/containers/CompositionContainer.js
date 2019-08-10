import React from 'react';
import CompositionCard from '../components/CompositionCard';

class Composition extends React.Component {
    
    allCompositions = () => {
        return this.props.allCompositions.map((comp) => {
            return <CompositionCard comp={comp} showOneComp={this.props.showOneComp}/>
        })

    } 

    render(){
        
        return(
            <div>
                <h2>My Compositions</h2>
                {this.allCompositions()}
            </div>
        )
    }
}

export default Composition;