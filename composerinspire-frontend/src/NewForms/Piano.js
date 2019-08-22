import React from 'react';
import Tone from 'tone';
import ChangeSound from './ChangeSound';
import '../piano.css';

class Piano extends React.Component {
    constructor(){
        super();
        this.state = {
            waveformSaved: "sine"   
        }
    }

    handleWaveformChoice = (wfChoice) => {
        this.setState({
          waveformSaved: wfChoice
        })
      }

    componentDidMount(){
        const synth = new Tone.Synth();
        console.log(this.state.waveformSaved)
        synth.oscillator.type = this.state.waveformSaved;
        synth.toMaster();
        const piano = document.getElementById('piano');
        piano.addEventListener("keydown", (e) => {
            console.log(e)
            synth.triggerAttack(e.target.dataset.note);
        });
        piano.addEventListener("keyup", (e) => {
            synth.triggerRelease();
        });

        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "d":
                    return synth.triggerAttack("C4");
                case "r":
                    return synth.triggerAttack("C#4");
                case "f":
                    return synth.triggerAttack("D4");
                case "t":
                    return synth.triggerAttack("D#4"); 
                case "g":
                    return synth.triggerAttack("E4");
                case "h":
                    return synth.triggerAttack("F4");
                case "u":
                    return synth.triggerAttack("F#4");
                case "j":
                    return synth.triggerAttack("G4");
                case "i":
                    return synth.triggerAttack("G#4");
                case "k":
                    return synth.triggerAttack("A4");
                case "o":
                    return synth.triggerAttack("A#4");
                case "l":
                    return synth.triggerAttack("B4");
                case ";":
                    return synth.triggerAttack("C5");
                default:
                    return;

            }
        })

        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "d":
                case "r":
                case "f":
                case "t":
                case "g":
                case "h":
                case "u":
                case "j":
                case "i":
                case "k":
                case "o":
                case "l":
                case ";":
                    synth.triggerRelease();        
            
            }
        })

    }

    render(){
        return(
            <div>
                <h2>Piano</h2>
                <ul id="piano">
                   <li data-note='C4' className='key'>
                       <div data-note="c#4" className='black-key'>R</div>
                       D
                    </li> 
                    <li data-note='D4' className='key'>
                        <div data-note='D#4' className='black-key'>T</div>
                    F
                    </li>
                    <li data='E4' className='key'>
                        G
                    </li>
                    <li data-note='F4' className='key'>
                        <div data-note='F#4' className='black-key'>U</div>
                    H
                    </li>
                    <li data-note='G4' className='key'>
                        <div data-note='G#4' className='black-key'>I</div>
                    J
                    </li>
                    <li data-note='A4' className='key'>
                        <div data-note='A#4' className='black-key'>O</div>
                    K
                    </li>
                    <li data-note='B4' className='key'>
                    L
                    </li>
                    <li data-note='B4' className='key'>
                    ;
                    </li>
                </ul>
                <ChangeSound handleWaveformChoice={this.handleWaveformChoice}/>
            </div>
        )
    }
}

export default Piano;