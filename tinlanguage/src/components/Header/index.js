import React from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'
import Logo from '../../assets/images/logo.svg'
import './style.css';

const Header = () => {
  return (
    
    <div className="header">
     
      <IconButton  >
      <PersonIcon className="header__icon" fontSize="large" color="secondary" variant="outlined"/>
      </ IconButton >
 
        <img
          className="header__logo"
          src={Logo}
          alt="tinlanguage logo " />
      <IconButton  >
      <ForumIcon className="header__icon" fontSize="large" color="secondary"/>
      </IconButton>

    </div>
  )
}

export default Header;
