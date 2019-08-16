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
    handleChange = (event) =>{
        console.log(event)
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