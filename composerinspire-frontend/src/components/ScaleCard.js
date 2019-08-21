import React from 'react';
import AllScales from '../assets/AllScales';
import { Icon, Button} from 'semantic-ui-react';

class ScaleCard extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteScale(this.props.scale)
    }

    render(){
        const {scale_name} = this.props.scale;
        return(
            <div>   
                <img className="scale-img" src={AllScales[`${scale_name}`]} alt={scale_name}></img><Button icon onClick={this.handleDeleteClick}><Icon name='trash alternate'/></Button>
 
            </div>
        )
    }
}

export default ScaleCard;