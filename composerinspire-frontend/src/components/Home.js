import React from 'react';
import Login from './Login';
import SignUp from '../NewForms/SignUp';
import { Segment, Image, Container } from 'semantic-ui-react';
import sheetMusicImg from '../assets/sheetmusic.jpeg';

class Home extends React.Component {

    render(){

        return(
            <div>
                <Segment floated='left'>
                <h1>MusicInspire</h1>
                <p>This website is for a user to create a music project manager of ideas they would have for a new music composition piece. </p>
                <p>You can select a key signature/scale as a reference for the piece.</p>
                <p>You can add your own youtube music videos, providing your own Youtube link for some music inspiration for your writing.</p>
                <p>You can jot down some quick ideas you have for the piece.</p>
                <p>There is also a Melody Generator where you can input your own notes and listen to the playback.</p>
                <h3>Happy Composing!</h3>
                <p style={{textAlign:"center"}}>©Fabian Fabro 2019</p>
                </Segment>
                <Container floated='left'>
                    <Image src={sheetMusicImg} size='large'/>
                </Container>
                
                {/* <Segment floated='right'>
                    <Login />
                    <SignUp />
                </Segment>
                 */}
            </div>
        )
    }
}

export default Home;