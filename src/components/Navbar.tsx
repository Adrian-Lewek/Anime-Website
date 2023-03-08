import { NavLink } from "react-router-dom"

import Searchbar from "./Searchbar"



export default function Navbar() {
  
  return(
    <>
      <div className="navHeight"></div>
      <div className="Navbar">
        <div className="nav-container">
          <div className='nav-left'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          </div>
          <div className='nav-right'>
          <Searchbar/>
          <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

