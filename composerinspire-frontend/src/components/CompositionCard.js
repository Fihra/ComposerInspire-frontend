import React from 'react';
import { Link } from "react-router-dom";

class CompositionCard extends React.Component { 
   
    handleCardClick = (selectedComp) => {
        this.props.showOneComp(selectedComp)

    }

    handleDeleteBtnClick = (selectedComp) => {
        const choice = window.confirm("Are you sure you want to delete this composition?")
        if(choice === true){
            this.props.fetchDeleteComp(selectedComp)
        }
        
    }

    render(){
        const {title} = this.props.comp
    
        return(
            
            <div>
            <Link to={`/compositions/${this.props.comp.id}`}><h3 onClick={() => {this.handleCardClick(this.props.comp)}}>{title}</h3></Link>
                <button onClick={() => this.handleDeleteBtnClick(this.props.comp)}>Delete</button>
            </div>
            
        )
    }
}

export default CompositionCard;