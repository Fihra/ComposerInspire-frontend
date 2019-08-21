import React from 'react';
import { List, Icon, Segment, Button } from 'semantic-ui-react';
import '../compStyle.css';

const InstrumentCard = (props) => {
    const { instrument_name } = props.instrument

    const deleteInstrument = () => {
        props.deleteInstrument(props.instrument)
    }
    return(
        <div>
            <Segment>
            <List.Item>{instrument_name}<Button icon className='delete-btn-position' onClick={deleteInstrument}><Icon name='trash alternate'/></Button></List.Item>
            </Segment>
        </div>
    )
}

export default InstrumentCard;