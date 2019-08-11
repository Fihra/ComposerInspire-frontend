import React from 'react';

class NewComposition extends React.Component {
    goingBack = () =>{
        this.props.history.goBack();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        this.props.submitNewComp(e)
        this.props.history.push('/compositions')
    }

    render(){
        return(
            <div>
                <h2>New Composition Form</h2>
                <button onClick={this.goingBack}>Back to Compositions</button>
                <form onSubmit={(e)=> {this.handleSubmit(e)}}>
                    <input type="text" name="newTitleForm" placeholder="New Title" onChange={this.props.handleNewCompInput}></input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NewComposition;