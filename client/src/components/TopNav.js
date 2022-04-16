import React from 'react';
import './TopNav.css';

import { NavLink } from 'react-router-dom';
const TopNav= () =>{
  return (
    <>

    <div className="topnav-container">
        <ul>
          <li>
                <NavLink to="/social">Social</NavLink>
          </li>
          <li>
                <NavLink to="/notification">Notifications</NavLink>
          </li>
          <li>
                <NavLink to="/update">Update</NavLink>
          </li>



        </ul>
    </div>



    </>
  )
}

export default TopNav;
