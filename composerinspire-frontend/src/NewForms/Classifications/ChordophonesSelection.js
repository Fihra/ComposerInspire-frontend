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

    handleChange = (event, data) =>{
        event.persist();
        // let savedChordophones = [];

        // if(event.target.className === 'delete icon' && savedChordophones.includes(data.value)) {
        //     return savedChordophones.filter((selected) => {
        //         return selected !== data.value
        //     })
        // }

        // else {
        //     savedChordophones.push(data.value);
        // }
        let chordos = "Chordophones";
        this.props.updateInstruments(event, data, chordos)

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