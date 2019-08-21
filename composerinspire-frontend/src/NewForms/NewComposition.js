import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

class NewComposition extends React.Component {

    componentDidMount(){
        this.props.resetNewCompForm();
    }
    state = {
        titleError: false
    }

    goingBack = () =>{
        this.props.history.goBack();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.newTitleForm === ""){
            window.alert("Please enter a title")
        } else if(this.props.allComps.some((comp) => {
            return comp.title === this.props.newTitleForm
        })){
                window.alert("Title already exists")
        }
        else {
            this.props.submitNewComp(e)
            this.props.history.push('/compositions')    
        }              
    }

    render(){
        return(
            <div>
                <h2>New Composition Form</h2>
                <Button style={{margin: '25px'}} onClick={this.goingBack}>Back to Compositions</Button>
                <div className='comp-form-container'>
                <Form onSubmit={(e)=> {this.handleSubmit(e)}}>
                    <Form.Input className='new-comp-form' name="newTitleForm" placeholder="New Title" onChange={this.props.handleNewCompInput}/>
                    <Button className="ui inverted blue button" type="submit">Submit</Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default NewComposition;