import React from 'react';

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
                <form onSubmit={(e)=> {this.handleJotSubmit(e)}}>
                    <input type="textarea" name="newJot" placeholder="Jot down something quick" onChange={this.props.handleNewJotInput}></input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NewJot;