import React from 'react';
import { Link } from "react-router-dom";

class CompositionCard extends React.Component { 
   
    handleCardClick = (selectedComp) => {
        this.props.showOneComp(selectedComp)

    }

    render(){
        const {title} = this.props.comp
    
        return(
            <Link to={`/compositions/${this.props.comp.id}`}>
            <div onClick={() => {this.handleCardClick(this.props.comp)}}>
                <h3>{title}</h3>
            </div>
            </Link>
        )
    }
}

export default CompositionCard;