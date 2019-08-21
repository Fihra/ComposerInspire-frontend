import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class NewSongRef extends React.Component{
    goingBack = () =>{
        this.props.history.push('/compositions')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.newYoutubeURL.includes("youtube.com")){
            this.props.submitNewSongRef(this.props.selectedComp)
            //TODO: Redirect Back to Compositions
            this.props.history.push(`/compositions/${this.props.selectedComp.id}`)
        } else{
            window.alert("Invalid Youtube Link");
        }
    }

    render(){
        return(
            <div>
                <h2>New Song Reference Form</h2>
                {/* <Button onClick={this.goingBack}>Back to Composition</Button> */}
                <Form onSubmit={(e)=> {this.handleSubmit(e)}}>
                    <Form.Input className='new-song-ref-form' type="text" name="newSongTitle" placeholder="Title Name" onChange={this.props.handleNewSongRefInput}></Form.Input>
                    <Form.Input className='new-song-ref-form' type="text" name="newArtist" placeholder="Artist Name" onChange={this.props.handleNewSongRefInput}></Form.Input>
                    <Form.Input className='new-song-ref-form' type="text" name="newYoutubeURL" placeholder="Youtube Link" onChange={this.props.handleNewSongRefInput}></Form.Input>
                    <Button className="ui inverted blue button" type="submit" value="Submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewSongRef;