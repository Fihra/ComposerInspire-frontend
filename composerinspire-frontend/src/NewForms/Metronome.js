import React from 'react';
import Tone from 'tone';
import '../metronomeStyle.css';

const synth = new Tone.PolySynth(2, Tone.Synth).toMaster();

class Metronome extends React.Component {
    constructor(){
        super();
        this.state = {
            isPlaying: false,
            count: 0,
            bpm: 120,
            beatsPerMeasure: 4,
            notes: ['C5', 'EB5'],
            timeSig: [4, 4],
            renderedNotes: [],
            metContainerSize: 0,
            loopStatus: false,
            beatTicks: 8,
            
        };
    }

    updateBPM = (event) => {
        const newBPM = event.target.value;
        this.setState({
            bpm: newBPM
        })
    }

    componentDidMount(){
        this.generateMetronome();
    }

    generateMetronome = () => {
        const metContainer = this.state.metronomeContainer;
        metContainer.forEach(part => {
            part.removeAll()
        })
        let metContainerSize = 0;
        const timeSig = this.state.timeSig;
        const renderedNotes = [];
        const notes = this.state.notes;
        
    }

    togglePlaying = () => {

    }

    loopUpdate = () => {

    }

    render(){
        const { isPlaying, bpm } = this.state;

        return(
            <div className='metronome'>
                <h2>Metronome</h2>
                <div className='bpm-slider'>
                    <div>{bpm} BPM</div>
                    <input 
                        type="range"
                        min="60"
                        max="240"
                        value={bpm} 
                        onChange={this.updateBPM}/>
                </div>
                <button>{isPlaying ? "Stop" : "Start"}</button>

            </div>
        )
    }
}

export default Metronome;