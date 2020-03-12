import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './style.js';
import {NavbarSection,Logo,LogoText,ListItem,UlList,Anchor } from './style.js'

const NavBar = () => {
  return (

    <NavbarSection>
        <div className="container">
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
            <UlList>
                <ListItem><NavLink exact to="/">Home</NavLink></ListItem>
                <ListItem><Anchor href="#work">Work</Anchor></ListItem>
                <ListItem><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#resume">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#about">About</Anchor></ListItem>
                <ListItem><NavLink exact to="/contact">Contact</NavLink></ListItem>
            </UlList>
        </div>
    </NavbarSection>
  );
};

export default NavBar;
