import React from 'react';
import './TopTitle.css';
import { NavLink } from 'react-router-dom';
const TopTitle = () =>{
  return (
    <>

    <div className="title">
         <div className="title-text">
           <p className="titleOne">Addis Ababa Science And Technology University</p>
           <p className="titleTwo">Project Management System</p>
         </div>

            <div class="search">
              <div className="searchInputs">
                  <input type="text"placeholder="Search..."></input>
                  <div className="searchIcon"></div>
              </div>

          </div>
          <div className="login-btn">
            <NavLink to="/login">
              <button class="buttons button2">Login</button>

            </NavLink>


          </div>
    </div>



    </>
  )
}

export default TopTitle;
