import React from 'react';
import { List, Icon, Segment } from 'semantic-ui-react';
import '../compStyle.css';

const InstrumentCard = (props) => {
    const { instrument_name } = props.instrument

    const deleteInstrument = () => {
        props.deleteInstrument(props.instrument)
    }
    return(
        <div>
            <Segment>
            <List.Item>{instrument_name}<button className='instrument-btn-position' onClick={deleteInstrument}><Icon name='trash alternate'/></button></List.Item>
            </Segment>
        </div>
    )
}

export default InstrumentCard;