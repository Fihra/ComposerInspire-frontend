import React from 'react';
import { Icon, List, Segment } from 'semantic-ui-react';
import '../compStyle.css'

const JotCard = (props) => {
    const { content } = props.jot

    const handleDeleteClick = () => {
        props.deleteJot(props.jot)
        // this.props.deleteScale(this.props.scale)
    }

    return(
        <div>
            <Segment>
            <List.Item>{content}<button className='instrument-btn-position' onClick={handleDeleteClick}><Icon name='trash alternate'/></button></List.Item>
            </Segment>
        </div>
    )
}

export default JotCard;