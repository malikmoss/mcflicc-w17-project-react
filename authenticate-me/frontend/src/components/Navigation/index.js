import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import UploadFormModal from './UploadModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <UploadFormModal />
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormPage /> */}
        <NavLink to="/login"><button type="submit">Log In</button></NavLink>
        <NavLink to="/signup"><button type="submit">Sign Up</button></NavLink>
      </>
    );
  }

  return (
    <ul className="navbar">
      <li>
        <h2 className="nav-title">mcflicc</h2>
        <NavLink exact to="/explore"><button className="home-button" type="submit">Home</button></NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;