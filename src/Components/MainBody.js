import React, {useState, useEffect} from 'react'
import {Link, Outlet} from "react-router-dom";
import '../Css/mainBody.css';

export const MainBody = () => {
  
  return (
    <div className="main-Body">
      <div className="bodyTop">
          <div className="bodyTopLeft">
            <Link to="/nearest">Nearest ride </Link>
            <Link to="/upcoming">Upcoming ride</Link>
            <Link to="/past">Past ride </Link>
          </div>
          <div className="bodyTopRight">
            {/* empty space for icon */}
            <a href='#'>Filters</a>
          </div>
      </div>


      <Outlet />
 
      {/* <div className="body">
        <div className="body-content">
           <RideList ridesData={ridesObj} user={user}/>
        </div>
      </div> */}
      {/* <div className="bodyBottom"></div> */}
      </div>
  )
}
