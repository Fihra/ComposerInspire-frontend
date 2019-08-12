import React from 'react';
import SongreferenceCard from './SongreferenceCard';

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
            return <SongreferenceCard key={i} song={song} />
        })
    }

    handleSongRefClick = () => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newsongreference`)
    }

    render(){
        const {title, songreferences} = this.props.comp

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
                {/* {songreferences.length !== 0 ? this.showSongReferences(songreferences) : <div></div>} */}
                
            </div>
        )
    }
}

export default SingleComposition;