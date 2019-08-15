import React from 'react';
import { Link } from "react-router-dom";

class CompositionCard extends React.Component { 
    handleDeleteBtnClick = (cardSelected) => {
        const choice = window.confirm("Are you sure you want to delete this composition?")
        if(choice === true){
            this.props.fetchDeleteComp(cardSelected)
        }      
    }

    render(){
        const {title} = this.props.comp
        let cardSelected = this.props.comp
        return(
            <div>
                <Link to={`/compositions/${cardSelected.id}`}><h3 onClick={() => {this.props.showOneComp(cardSelected)}}>{title}</h3></Link>
                <button onClick={() => this.handleDeleteBtnClick(cardSelected)}>Delete</button>
            </div> 
        )
    }
}

export default CompositionCard;