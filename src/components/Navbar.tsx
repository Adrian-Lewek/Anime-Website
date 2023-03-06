import { NavLink } from "react-router-dom"

import Searchbar from "./Searchbar"



export default function Navbar() {
  
  return(
    <div className="Navbar">
    <div className="nav-container">
        <div className='nav-left'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/test">Donate</NavLink>
        </div>
        <div className='nav-right'>
        <Searchbar/>
        <NavLink to="/profile">Profile</NavLink>
        </div>
    </div>
    </div>
  )
}

