import React, { Component } from 'react';
import { Membranophones } from '../../MusicData/InstrumentsData';
import { Dropdown } from 'semantic-ui-react';

class MembranophonesSelection extends Component {
    allMembranophones = () => {
        return Object.keys(Membranophones).map((membrano, i) => {
            return {
                key: i,
                value: membrano,
                text: Membranophones[membrano]
            }
        })
    }

    handleChange = (event) =>{
        console.log(event)
    }
    render(){
        return(
            <div>
            <h3>Membranophones</h3>
            <Dropdown
                placeholder='Percussion'
                fluid multiple selection
                onChange={this.handleChange}
                options={this.allMembranophones()}
            />
            </div>
        )
    }
}

export default MembranophonesSelection;