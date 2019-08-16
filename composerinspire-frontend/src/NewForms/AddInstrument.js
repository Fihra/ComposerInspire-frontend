import React from 'react';
import { Form, Button, Grid, Segment } from 'semantic-ui-react';
import AerophonesSelection from './Classifications/AerophonesSelection';
import ChordophonesSelection from './Classifications/ChordophonesSelection';
import ElectrophonesSelection from './Classifications/ElectrophonesSelection';
import IdiophonesSelection from './Classifications/IdiophonesSelection';
import MembranophonesSelection from './Classifications/MembranophonesSelection';

class AddInstrument extends React.Component{
    showAllCompositions = () => {
        return this.props.allComps.map((comp, i) => {
            let name = comp.title
            return {
                key: i,
                text: name,
                value: comp
            }
        })
    }

    hanldeCompChoice = (event, data) => {
        console.log(data)
    }
    
    render(){
        return(
            <div>
                <h1>Add Instrument</h1>
                <Form >
                    <Form.Dropdown
                        placeholder='Select Composition'
                        fluid search selection
                        onChange={this.handleCompChoice}
                        options={this.showAllCompositions()}
                    />
                </Form>
                <Segment>
                    <Grid columns={5}>
                        <Grid.Column>
                            <AerophonesSelection />
                        </Grid.Column>
                        <Grid.Column>
                            <ChordophonesSelection />
                        </Grid.Column>
                        <Grid.Column>
                            <ElectrophonesSelection />
                        </Grid.Column>
                        <Grid.Column>
                            <IdiophonesSelection />
                        </Grid.Column>
                        <Grid.Column>
                            <MembranophonesSelection />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default AddInstrument;