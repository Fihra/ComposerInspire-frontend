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

    handleCompChoice = (event, data) => {
        console.log(data.value)
        this.props.selectCompForInstruments(data.value) 

    }

    handleSubmit = () => {
        console.log("Submitting all these instruments")
    }
    render(){
        return(
            <div>
                <h1>Add Instrument</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Dropdown
                        placeholder='Select Composition'
                        fluid search selection
                        onChange={this.handleCompChoice}
                        options={this.showAllCompositions()}
                    />
                
                <Segment>
                    <Grid columns={5}>
                        <Grid.Column>
                            <AerophonesSelection updateAerophones={this.props.updateAerophones} updateInstruments={this.props.updateInstruments}/>
                        </Grid.Column>
                        <Grid.Column>
                            <ChordophonesSelection updateChordophones={this.props.updateChordophones} updateInstruments={this.props.updateInstruments}/>
                        </Grid.Column>
                        <Grid.Column>
                            <ElectrophonesSelection updateElectrophones={this.props.updateElectrophones} updateInstruments={this.props.updateInstruments}/>
                        </Grid.Column>
                        <Grid.Column>
                            <IdiophonesSelection updateIdiophones={this.props.updateIdiophones} updateInstruments={this.props.updateInstruments}/>
                        </Grid.Column>
                        <Grid.Column>
                            <MembranophonesSelection updateMembranophones={this.props.updateMembranophones} updateInstruments={this.props.updateInstruments}/>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Button type="submit">Submit</Button> 
                </Form>
            </div>
        )
    }
}

export default AddInstrument;