import React, { Component } from 'react';
import { Aerophones } from '../../MusicData/InstrumentsData';
import { Dropdown} from 'semantic-ui-react';

class AerophonesSelection extends Component {
    allAerophones = () => {
        return Object.keys(Aerophones).map((aero, i) => {
            return {
                key: i,
                value: aero,
                text: Aerophones[aero]
            }
            // return Aerophones[aero]
        })
    }

    handleChange = (event, data) =>{
        event.persist();
        let aeros = "Aerophones";
        
        this.props.updateInstruments(event, data, aeros);

    }

    render(){
        return(
            <div>
            <h3>Aerophones</h3>
            <Dropdown
                placeholder='Winds'
                fluid multiple selection
                onChange={this.handleChange}
                options={this.allAerophones()}
            />
            </div>
        )
    }
}

export default AerophonesSelection;