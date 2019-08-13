import React from 'react';


const Navbar = () => {
    return(
        <div>
            <ul id="nav-bar">
                <li><a href="/">Home</a></li>
                <li><a href="/compositions">My Compositions</a></li>
                {/* <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Log in</a></li> */}
                
            </ul>
        </div>
    )
}

export default Navbar;