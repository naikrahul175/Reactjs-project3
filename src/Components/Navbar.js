import React from 'react'
import { Avatar, IconButton } from "@mui/material";
import '../Css/navbar.css'

export const Navbar = ({user}) => {
  return (
    <div className="navbar">
     <div className="navbarLeft">
         <h2>Edvora</h2>
     </div>
     <div className="navbarRight">
        <h4>{user.name}</h4><Avatar />
     </div>
    </div>
  )
}
