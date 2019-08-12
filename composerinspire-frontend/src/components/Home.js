import React from 'react';
import Login from './Login';
import SignUp from '../NewForms/SignUp';

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>MusicInspire</h1>
                <p>This website is for a user to sign up and create a project manager of ideas they would have for a new music composition piece. </p>
                <Login />
                <SignUp />
            </div>
        )
    }
}

export default Home;