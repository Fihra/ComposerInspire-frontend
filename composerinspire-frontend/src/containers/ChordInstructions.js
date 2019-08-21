import React from 'react';
import { Icon } from 'semantic-ui-react';

class ChordInstructions extends React.Component{
    render(){
        return(
            <div>
                <h1>Melody Generator</h1>
                <h3>Keyboard Input:</h3>
                <p>Note Names: C, D, E, F, G, A, B</p>
                <p>Move Left: <Icon name='arrow alternate circle left outline' /> </p>
                <p>Move Right: <Icon name='arrow alternate circle right outline' /> </p>
            </div>
        )   
    }
}

export default ChordInstructions;