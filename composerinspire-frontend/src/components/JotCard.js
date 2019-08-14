import React from 'react';

const JotCard = (props) => {
    const { content } = props.jot

    const handleDeleteClick = () => {
        props.deleteJot(props.jot)
        // this.props.deleteScale(this.props.scale)
    }

    return(
        <div>
            <li>{content}<button onClick={handleDeleteClick}>-</button></li>
        </div>
    )
}

export default JotCard;