import React from 'react';
import { Icon, List, Segment, Button } from 'semantic-ui-react';
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
            <List.Item>{content}<Button icon className='delete-btn-position' onClick={handleDeleteClick}><Icon name='trash alternate'/></Button></List.Item>
            </Segment>
        </div>
    )
}

export default JotCard;