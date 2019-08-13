import React from 'react';
import AllScales from '../assets/AllScales';

class ScaleCard extends React.Component {

    render(){
        const {scale_name} = this.props.scale;
        return(
            <div>   
                <img className="scale-img" src={AllScales[`${scale_name}`]}></img>
 
            </div>
        )
    }
}

export default ScaleCard;