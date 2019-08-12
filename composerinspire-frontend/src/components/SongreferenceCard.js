import React from 'react';

const SongreferenceCard = (props) => {
    const {song_title, artist, youtube_url} = props.song;

    const embedYoutubeURL = (yt) => {
        let toEmbed = yt.replace("watch?v=", "embed/")
        return <iframe src={toEmbed}/>
    }

    return(
        <div>
            {`${artist}: ${song_title}`}
            {embedYoutubeURL(youtube_url)}
        </div>
    )
}

export default SongreferenceCard;