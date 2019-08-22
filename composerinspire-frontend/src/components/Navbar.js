import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const Navbar = (props) => {
    return(
        <Menu pointing>
            <Menu.Item as={ Link } name='home' to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } name='compositions' to='/compositions'>Compositions</Menu.Item>
            <Menu.Item as={ Link } name='add-instrument' to='/addinstrument'>Add Instrument</Menu.Item>
            {/* Melody Generator Playground */}
            <Menu.Item as={ Link } name='melody-generator' to='/melodygenerator'>Melody Generator</Menu.Item>
            <Menu.Item as={ Link } name='piano' to='/virtualpiano'>Virtual Piano</Menu.Item>
            {/* <Menu.Item as={ Link } name='metronome' to='/metronome'>Metronome</Menu.Item> */}

        </Menu>
    )
}

export default withRouter(Navbar);

