import React from 'react';
import Vex from 'vexflow';
import  NewChordsScore from '../containers/NewChordsScore';

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
            onCurrentNoteIndex: 0
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

                    default:
                        break;
                }
            }

        })
    }

    updatePitch = () => {
        
    }

    get stave(){
        const stave = new VF.Stave(this.state.stave.x, this.state.stave.y, this.state.stave.saveWidth);
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

    render(){
        return(
            <div>
                <NewChordsScore
                height={this.state.height}
                width={this.state.width}
                font={this.state.font}
                fontColor={this.state.fontColor}
                stave={this.stave}
                voice={this.voice}
                noteToggle={this.noteToggle}
                toggledNoteInputBtnSpan={this.state.toggledNoteInputBtnSpan}
                />
            </div>
        )
    }
}

export default NewChordProgression;