import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//  {/* <div>
//             <ul id="nav-bar">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/compositions">My Compositions</a></li>
                
//             </ul>
//         </div> */}

const Navbar = () => {

    return(
        <Menu>
            <Menu.Item as={ Link } name='home' to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } to='/compositions' name='compositions'>Compositions</Menu.Item>
        </Menu>
    )
}

export default Navbar;