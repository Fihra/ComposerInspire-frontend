import React from 'react';

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
                {`${artist}: ${song_title}`}
                {embedYoutubeURL(youtube_url)}
                <button onClick={() => handleDeleteClick()}>-</button>
            </div>
        )
}

export default SongreferenceCard;