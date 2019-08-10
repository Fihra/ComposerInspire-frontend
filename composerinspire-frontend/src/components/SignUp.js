import React from 'react';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state ={
            name: ""
        }
    }

    handleSubmit = (e)  => {
        e.preventDefault();
        console.log(e)
        debugger
    }

    render(){
        return(   
            <div>
            <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp;