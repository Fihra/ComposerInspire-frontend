import React, { Component } from 'react';
import { Chordophones } from '../../MusicData/InstrumentsData';
import { Dropdown} from 'semantic-ui-react';

class ChordophonesSelection extends Component {
    allChordophones = () => {
        return Object.keys(Chordophones).map((chordo, i) => {
            return {
                key: i,
                value: chordo,
                text: Chordophones[chordo]
            }
        })
    }

    handleChange = (event) =>{
        console.log(event)
    }
    render(){
        return(
            <div>
            <h3>Chordophones</h3>
            <Dropdown
                placeholder='Strings'
                fluid multiple selection
                onChange={this.handleChange}
                options={this.allChordophones()}
            />
            </div>
        )
    }
}

export default ChordophonesSelection;