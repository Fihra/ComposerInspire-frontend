import React from 'react';

// const SingleComposition = (props) => {
class SingleComposition extends React.Component {
    state = {
        class: "hidden"
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
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev)
    }


    render(){
        const {title} = this.props.comp

        return(
            <div>
                <button onClick={this.goingBack}>Back to Compositions</button>
                <h4>{title} <button onClick={this.handleEditClick}>Edit</button></h4>
                <form className={this.state.class} onSubmit={this.handleSubmit}>
                    <input name="title" type="text" value={title}></input>
                    <input type="submit" value="Submit"/>
                </form>
                <p>More Info goes here</p>
            </div>
        )
    }
}

export default SingleComposition;