import React from 'react';
import { Form } from 'semantic-ui-react';

class ChangeSound extends React.Component {
    waveforms = () => {
        const waveformTypes = ["sine", "square", "sawtooth", "triangle"];

        return waveformTypes.map((wf, i) =>{
            return {
                key: i,
                text: wf,
                value: wf,
                
                // image: { avatar: true, src: AllScales[scale]}
            }
        })
    }

    handleWaveform = (event, data) => {
        this.props.handleWaveformChoice(data.value)
    }

    render(){
        return(
            <div>
                <h2>Adjust Sounds</h2>
                <Form.Dropdown
                        className='new-scale-menu'
                        placeholder='Select Waveform Sound'
                        fluid selection
                        onChange={this.handleWaveform}
                        options={this.waveforms()}    
                />
            </div>
        )
    }
}

export default ChangeSound;