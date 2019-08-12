import React from 'react';

class NewSongRef extends React.Component{
    goingBack = () =>{
        this.props.history.push('/compositions')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitNewSongRef(this.props.selectedComp)
        // this.props.submitNewComp(e)
        // this.props.history.push('/compositions')
    }

    render(){
        return(
            <div>
                <h2>New Song Reference Form</h2>
                <button onClick={this.goingBack}>Back to Composition</button>
                <form onSubmit={(e)=> {this.handleSubmit(e)}}>
                    <input type="text" name="newSongTitle" placeholder="Title Name" onChange={this.props.handleNewSongRefInput}></input>
                    <input type="text" name="newArtist" placeholder="Artist Name" onChange={this.props.handleNewSongRefInput}></input>
                    <input type="text" name="newYoutubeURL" placeholder="Youtube Link" onChange={this.props.handleNewSongRefInput}></input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NewSongRef;