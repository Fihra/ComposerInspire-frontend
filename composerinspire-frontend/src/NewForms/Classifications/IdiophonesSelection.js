import React, { Component } from 'react';
import { Idiophones } from '../../MusicData/InstrumentsData';
import { Dropdown } from 'semantic-ui-react';

class IdiophonesSelection extends Component {
    allIdiophones = () => {
        return Object.keys(Idiophones).map((idio, i) => {
            return {
                key: i,
                value: idio,
                text: Idiophones[idio]
            }
        })
    }
    handleChange = (event, data) =>{
        event.persist();
        // let savedIdiophones = [];
        let idios = "Idiophones";

        // if(event.target.className === 'delete icon' && savedIdiophones.includes(data.value)) {
        //     return savedIdiophones.filter((selected) => {
        //         return selected !== data.value
        //     })
        // }

        // else {
        //     savedIdiophones.push(data.value);
        // }
        
        this.props.updateInstruments(event, data, idios);

    }
    render(){
        return(
            <div>
                <h3>Idiophones</h3>
                <Dropdown
                placeholder='Pitched Percussion'
                fluid multiple selection
                onChange={this.handleChange}
                options={this.allIdiophones()}
            />
            </div>
        )
    }
}

export default IdiophonesSelection;