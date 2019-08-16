import React, { Component } from 'react';
import { Electrophones } from '../../MusicData/InstrumentsData';
import { Dropdown } from 'semantic-ui-react';

class ElectrophonesSelection extends Component {
    allElectrophones = () => {
        return Object.keys(Electrophones).map((electro, i) => {
            return {
                key: i,
                value: electro,
                text: Electrophones[electro]
            }
        })
    }

    handleChange = (event) =>{
        console.log(event)
    }
    render(){
        return(
            <div>
            <h3>Electrophones</h3>
            <Dropdown
                placeholder='Electric'
                fluid multiple selection
                onChange={this.handleChange}
                options={this.allElectrophones()}
            />
            </div>
        )
    }
}

export default ElectrophonesSelection;