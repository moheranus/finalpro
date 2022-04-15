import React from 'react';
import './TopTitle.css';

const TopTitle = () =>{
  return (
    <>

    <div className="title">
         <div className="title-text">
           <p className="titleOne">Addis Ababa Science And Technology University</p>
           <p className="titleTwo">Research and Thesis Management System</p>
         </div>

            <div class="search">
              <div className="searchInputs">
                  <input type="text"placeholder="Search..."></input>
                  <div className="searchIcon"></div>
              </div>

          </div>
    </div>



    </>
  )
}

export default TopTitle;
