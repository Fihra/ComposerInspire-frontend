import React from 'react';

class ChordInstructions extends React.Component{
    render(){
        return(
            <div>
                <h3>Instructions</h3>
                <p>Keyboard Input:</p>
                <p>Note Names: c, d, e, f, g, a, b</p>
                <p>Switch to each note: {"| Left Arrow Key <- |"} {"| Right Arrow Key -> |"} </p>
            </div>
        )   
    }
}

export default ChordInstructions;