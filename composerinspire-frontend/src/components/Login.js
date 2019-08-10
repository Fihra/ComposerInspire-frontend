import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state ={
            name: ""
        }
    }

    handleSubmit = (e)  => {
        e.preventDefault();
        console.log(e)
    }

    render(){
        return(   
            <div>
            <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;