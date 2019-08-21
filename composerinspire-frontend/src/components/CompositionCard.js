import React from 'react';
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';

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
            <Link to={`/compositions/${this.props.comp.id}`}><h3 className='title' onClick={() => {this.handleCardClick(this.props.comp)}}>{title}</h3></Link>
                <Button icon onClick={() => this.handleDeleteBtnClick(this.props.comp)}><Icon name='trash alternate'/></Button>
            </div>
            
        )
    }
}

export default CompositionCard;