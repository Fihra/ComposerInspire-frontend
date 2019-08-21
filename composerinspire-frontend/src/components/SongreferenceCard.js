import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';

const SongreferenceCard = (props) => {
    const embedYoutubeURL = (yt) => {
        let toEmbed = yt.replace("watch?v=", "embed/")
        return <iframe src={toEmbed} title={song_title}/>
    }

    const handleDeleteClick = () => {
        props.deleteSongRef(props.song)
    }
    
        const {song_title, artist, youtube_url} = props.song;
        return(
            <div>
                <Segment>
                <div>{`${artist}: ${song_title}`}<button onClick={() => handleDeleteClick()}><Icon name='trash alternate'/></button></div>
                {embedYoutubeURL(youtube_url)}
                </Segment>
            </div>
        )
}

export default SongreferenceCard;