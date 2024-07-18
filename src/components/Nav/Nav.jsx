import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className='nav'>
      <Link to='/home'>
        <h2 className='nav-title'>Professional Launch</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className='navLink' to='/login'>
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {user.isMentor && (
            <Link className='navLink' to='/mentor-home'>
              Home
            </Link>
            )}

            {!user.isMentor && (
            <>
            <Link className='navLink' to='/mentee-home'>
              Home
            </Link>
            <Link className="navLink" to="/available-mentors">
              Available Mentors
            </Link>
            <Link className="navLink" to="/my-mentors">
              My Mentors
            </Link>
            </>
            )}

            <Link className='navLink' to='/resources'>
              Resources
            </Link>

            <Link className='navLink' to='/profile'>
              Profile
            </Link>

            <LogOutButton className='navLink' />
          </>
        )}
        {user.isAdmin && (
          <>
            <Link className='navLink' to='/admin'>
              Admin
            </Link>
          </>
        )}

        <Link className='navLink' to='/about'>
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
