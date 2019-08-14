import React from 'react';

const JotCard = (props) => {
    const { content } = props.jot

    return(
        <div>
            <li>{content}</li>
        </div>
    )
}

export default JotCard;