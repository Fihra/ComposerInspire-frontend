import React from 'react';
import Vex from 'vexflow';

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

    render(){
        return(
            <div>
                <button onClick={this.handleNoteToggle}><span>{this.props.toggledNoteInputBtnSpan}</span></button>
                <div ref={'wrapper'}>
                    </div>
            </div>
        )
    }
}

export default NewChordsScore;