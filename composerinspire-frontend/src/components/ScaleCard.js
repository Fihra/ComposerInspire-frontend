import React from 'react';
import AllScales from '../assets/AllScales';
import { Icon } from 'semantic-ui-react';

class ScaleCard extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteScale(this.props.scale)
    }

    render(){
        const {scale_name} = this.props.scale;
        return(
            <div>   
                <img className="scale-img" src={AllScales[`${scale_name}`]} alt={scale_name}></img><button onClick={this.handleDeleteClick}><Icon name='trash alternate'/></button>
 
            </div>
        )
    }
}

export default ScaleCard;