import React from 'react';
import { NavLink } from 'react-router-dom';
//import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'
import Logo from '../../assets/images/logo.svg'
import './style.css';

const Header = () => {
  return (
    
    <div className="header">
     <NavLink to="/profile">
      <IconButton  >
        <PersonIcon className="header__icon" fontSize="large" color="secondary" variant="outlined" />
        </ IconButton >
            </NavLink> 
 
        <img
          className="header__logo"
          src={Logo}
        alt="tinlanguage logo " />
      <NavLink to="/chat">
      <IconButton  >
        <ForumIcon className="header__icon" fontSize="large" color="secondary" />
        </IconButton>
      </NavLink> 

    </div>
  )
}

export default Header;
