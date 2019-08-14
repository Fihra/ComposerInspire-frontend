import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const Navbar = (props) => {
    console.log(props)
    const goHome  = () => {

    }

    return(
        <Menu>
            <Menu.Item as={ Link } name='home' to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } name='compositions' to='/compositions'>Compositions</Menu.Item>
            {/* <Menu.Item onClick={() => props.history.push('/')}>Home</Menu.Item>
            <Menu.Item onClick={() => props.history.push('/compositions')}>Compositions</Menu.Item> */}

        </Menu>
    )
}

export default withRouter(Navbar);

