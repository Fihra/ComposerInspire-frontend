import React from 'react';

const InstrumentCard = (props) => {
    const { instrument_name } = props.instrument

    const deleteInstrument = () => {
        props.deleteInstrument(props.instrument)
    }
    return(
        <div>
            <li>{instrument_name}<button onClick={deleteInstrument}>-</button></li>
        </div>
    )
}

export default InstrumentCard;