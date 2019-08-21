import React from 'react';
import Vex from 'vexflow';
import { Button } from 'semantic-ui-react';

const VF = Vex.Flow;

class NewChordsScore extends React.Component {
    constructor(props){
        super(props);
        this._renderer = null;
        this._context = null;
    }

    componentDidMount(){ this.handleProps()}
    componentDidUpdate(){ this.handleProps()}

    handleProps() {
        this.clear();

        const {
            width,
            height,
            font,
            fontColor,
            stave,
            voice
        } = this.props;

        this._renderer = new VF.Renderer(
            this.refs.wrapper, VF.Renderer.Backends.SVG
        );
        this._renderer.resize(width, height);
        this._context = this._renderer.getContext();
        this._context.setFont(...font).setBackgroundFillStyle(fontColor);

        stave.setContext(this._context).draw();
        voice.draw(this._context, stave);
    }

    clear = () => {
        this.refs.wrapper.innerHTML = '';
    }

    handleNoteToggle = (e) => {
        this.props.noteToggle()
    }

    handlePlayToggle = (e) => {
        this.props.playToggle()
    }

    render(){
        return(
            <div>
                <Button onClick={this.handleNoteToggle}><span>{this.props.toggledNoteInputBtnSpan}</span></Button>
                <Button onClick={this.handlePlayToggle}><span>{this.props.toggleIsPlaying}</span></Button>
                <div ref={'wrapper'}>
                    </div>
            </div>
        )
    }
}

export default NewChordsScore;