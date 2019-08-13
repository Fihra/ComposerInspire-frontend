import React from 'react';
import AllScales from '../assets/AllScales';

class ScaleCard extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteScale(this.props.scale)
        // this.props.deleteScale(this.props.scale)
    }

    render(){
        const {scale_name} = this.props.scale;
        return(
            <div>   
                <img className="scale-img" src={AllScales[`${scale_name}`]} alt={scale_name}></img><button onClick={this.handleDeleteClick}>-</button>
 
            </div>
        )
    }
}

export default ScaleCard;