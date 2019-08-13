import React from 'react';
import SongreferenceCard from './SongreferenceCard';
import ScaleCard from './ScaleCard';

class SingleComposition extends React.Component {
    state = {
        class: "hidden",
        done: false
    }

    goingBack = () =>{
        this.props.history.push("/compositions/");
    }

    handleEditClick = () => {
        if(this.state.class === "hidden"){
            this.setState({
              class: "show"
            })
          } else{
            this.setState({
              class: "hidden"
            })
          }
        }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateTitle(this.props.comp)
        this.props.history.goBack();
        // this.props.history.push(`/compositions/${this.props.comp.id}`)
    }

    showSongReferences = (songRefs) => {
        return songRefs.map((song, i) => {
            return <SongreferenceCard key={i} song={song} deleteSongRef={this.props.deleteSongRef}/>
        })
    }

    handleSongRefClick = () => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newsongreference`)
    }

    showScales = (scales) => {
        return scales.map((scale, i) => {
            return <ScaleCard key={i} scale={scale} />
        })
    }

    handleScaleClick = (e) => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newscale`)
    }

    render(){
        const {title, songreferences, scales} = this.props.comp

        return(
            <div>
                <button onClick={this.goingBack}>Back to Compositions</button>
                <h3>{title} <button onClick={this.handleEditClick}>Edit</button></h3>
                {!this.state.done && (
                <form className={this.state.class} onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="formTitleName" type="text" value={this.props.formTitleName} onChange={this.props.handleTitleInput}></input>
                    <input type="submit" value="Submit"/>
                </form>
                )}
                <p>More Info goes here</p>
                <h4>Song References<button onClick={(e) => this.handleSongRefClick(e)}>+</button></h4>
                {songreferences ? this.showSongReferences(songreferences): <div></div>}
                <h4>Saved Scales<button onClick={(e) => this.handleScaleClick(e)}>+</button></h4>
                {scales ? this.showScales(scales): <div></div>}
            </div>
        )
    }
}

export default SingleComposition;