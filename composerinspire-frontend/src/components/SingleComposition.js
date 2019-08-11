import React from 'react';

class SingleComposition extends React.Component {
    state = {
        class: "hidden",
        done: false
    }

    goingBack = () =>{
        this.props.history.goBack();
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
        this.props.updateTitle(event, this.props.comp)
    }

    render(){
        const {title} = this.props.comp

        return(
            <div>
                <button onClick={this.goingBack}>Back to Compositions</button>
                <h4>{title} <button onClick={this.handleEditClick}>Edit</button></h4>
                {!this.state.done && (
                <form className={this.state.class} onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="formTitleName" type="text" value={this.props.formTitleName} onChange={this.props.handleTitleInput}></input>
                    <input type="submit" value="Submit"/>
                </form>
                )}
                <p>More Info goes here</p>
            </div>
        )
    }
}

export default SingleComposition;