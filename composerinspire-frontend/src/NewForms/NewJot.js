import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

class NewJot extends React.Component{
    goingBack = () =>{
        this.props.history.push('/compositions')
    }

    handleJotSubmit = (e) => {
        e.preventDefault();
        this.props.submitJot(this.props.selectedComp)
        //TODO: Redirect Back to Compositions
        this.props.history.push(`/compositions/${this.props.selectedComp.id}`)
    }

    render(){
        return(
            <div>
                <h2>New Jot Down Form</h2>
                {/* <button onClick={this.goingBack}>Back to Composition</button> */}
                <Form onSubmit={(e)=> {this.handleJotSubmit(e)}}>
                    <TextArea className='new-jot-form' name="newJot" placeholder="Jot down something quick" onChange={this.props.handleNewJotInput}></TextArea>
                    <Button className="ui inverted blue button" type="submit" value="Submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewJot;