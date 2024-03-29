import React from 'react';

const SongreferenceCard = (props) => {
    const embedYoutubeURL = (yt) => {
        let toEmbed = yt.replace("watch?v=", "embed/")
        return <iframe src={toEmbed}/>
    }

    const handleDeleteClick = () => {
        props.deleteSongRef(props.song)
    }
    
        const {song_title, artist, youtube_url} = props.song;
        return(
            <div>
                {`${artist}: ${song_title}`}<button onClick={() => handleDeleteClick()}>-</button>
                {embedYoutubeURL(youtube_url)}
            </div>
        )
}

export default SongreferenceCard;