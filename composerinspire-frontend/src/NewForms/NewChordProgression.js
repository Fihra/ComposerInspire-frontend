import React from 'react';
import Vex from 'vexflow';
import NewChordsScore from '../containers/NewChordsScore';
import ChordInstructions from '../containers/ChordInstructions';
import Tone from 'tone';

const VF = Vex.Flow;

class NewChordProgression extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
                new VF.StaveNote({keys: ["c/4"], duration: "q"}),
                new VF.StaveNote({keys: ["d/4"], duration: "q"}),
                new VF.StaveNote({keys: ["g/4"], duration: "q"}),
                new VF.StaveNote({keys: ["c/4"], duration: "q"}),
            ],
            height: 800,
            width: 800,
            font: ['Arial', 10, ''],
            fontColor: "#eed",
            stave: {x: 10, y: 40, staveWidth: 400},
            savedNote: "",
            isNoteInputOn: false,
            toggledNoteInputBtnSpan: "Note Toggle On",
            onCurrentNoteIndex: 0,
            toggleIsPlaying: "Play",
            isPlaying: false

        }
    }

    componentDidMount(){
        document.addEventListener("keydown", (e) => {
            let input = e.key;
            let noteInput;
            let movedLeft;
            let movedRight;
            if(this.state.isNoteInputOn === true){
                switch(input){
                    case "ArrowLeft":
                        movedLeft = e.key;
                        if(this.state.onCurrentNoteIndex ===  0){
                            break;
                        }
                        this.setState({
                            onCurrentNoteIndex: this.state.onCurrentNoteIndex - 1
                        })
                        break;
                    case "ArrowRight":
                        movedRight = e.key;
                        if(this.state.onCurrentNoteIndex > this.state.notes.length -2){
                            return this.state.onCurrentNoteIndex
                        } else{
                            this.setState({
                                onCurrentNoteIndex: this.state.onCurrentNoteIndex + 1
                            })
                        }
                        break;
                    case "c":
                    case "d":
                    case "e":
                    case "f":
                    case "g":
                    case "a":
                    case "b":
                        noteInput = e.key;
                        this.updatePitch(noteInput);
                    default:
                    break;
                }
            }
        })
    }

    updatePitch = (noteInput) => {
        this.setState({
          savedNote: noteInput
        })
        this.setState((state) => {
          return {
            notes: state.notes.map((note, idx) => {
    
              if (idx === state.onCurrentNoteIndex) {
                return new VF.StaveNote({
                  keys: [`${state.savedNote}/4`], duration: "q"})

              }
              return note;
            }) 
          }
        })
    } 

    get stave(){
        const stave = new VF.Stave(this.state.stave.x, this.state.stave.y, this.state.stave.staveWidth);
        stave.addClef("treble").addTimeSignature('4/4');
        return stave;
    }

    get voice(){
        let voice = new VF.Voice({num_beats: 4, beat_value: 4});
        voice.addTickables(this.state.notes);
        let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
        return voice;

    }

    noteToggle = (e) => {
        if(!this.state.isNoteInputOn){
            this.setState({
                toggledNoteInputBtnSpan: "Note Toggle Off",
                isNoteInputOn: true
            })
        } else {
            this.setState({
                toggledNoteInputBtnSpan: "Note Toggle On",
                isNoteInputOn: false
            })
        }
    }

    playToggle = (e) => {
        let chosenNotes = this.state.notes.map((note) => {
            return note.keys[0].split("/")[0].toUpperCase();
        })
        console.log(chosenNotes)

        if(!this.state.isPlaying){
            this.setState({
                toggleIsPlaying: "Stop",
                isPlaying: true
            })
            const synth = new Tone.Synth().toMaster();
            Tone.Transport.bpm.value = 150;

            let melody = [
                [`${chosenNotes[0]}4`, "4n"],
                [`${chosenNotes[1]}4`, "4n"],
                [`${chosenNotes[2]}4`, "4n"],
                [`${chosenNotes[3]}4`, "4n"]
            ];

            let t = Tone.now();
            for(const note of melody){
                if(note[0] !== 'rest'){
                    synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
                }
                t += Tone.Time(note[1]);
            }


            // let synth = new Tone.Synth().toMaster()
            // let synth2 = new Tone.Synth().toMaster()
            // let synth3 = new Tone.Synth().toMaster()
            // let synth4 = new Tone.Synth().toMaster()
            // synth.triggerAttackRelease('C4', '4n')
            // synth2.triggerAttackRelease('D4', '4n')
            // synth3.triggerAttackRelease('E4', '4n')
            // synth4.triggerAttackRelease('F4', '4n')
            // seq.triggerAttackRelease();
            
            //C/4 = 261.63


            
        } else {
            this.setState({
                toggleIsPlaying: "Play",
                isPlaying: false
            })
 
        }
    }

    /* Audio API */
    playback = () => {
        
    }
    /*---------------- */

    render(){
        return(
            <div>
                <ChordInstructions/>
                <NewChordsScore
                height={this.state.height}
                width={this.state.width}
                font={this.state.font}
                fontColor={this.state.fontColor}
                stave={this.stave}
                voice={this.voice}
                noteToggle={this.noteToggle}
                toggledNoteInputBtnSpan={this.state.toggledNoteInputBtnSpan}
                toggleIsPlaying={this.state.toggleIsPlaying}
                playToggle={this.playToggle}
                />
            </div>
        )
    }
}

export default NewChordProgression;