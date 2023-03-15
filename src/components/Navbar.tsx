import { NavLink } from "react-router-dom"
import {useState} from 'react'
import Searchbar from "./Searchbar"
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Navbar() {
  const [openMenu, setOpenMenu]  = useState(false);
  function handleMenuClick(){
    setOpenMenu(!openMenu);
    console.log('test')
  }
  return(
    <>
      <div className="navHeight"></div>
      <div className="Navbar">
        <div className="nav-container-Mobile">
          <div className={openMenu ? "mobileMenu activeItem" : "mobileMenu"} onClick={() => handleMenuClick()}>
            <GiHamburgerMenu/>
          </div>
          <Searchbar mobile={false}/>
        </div>
        <div className={openMenu ? "activeMenu" : "mobileMenuContainer"}>
          <div className="menuFirst">
            <NavLink to="/" onClick={() => handleMenuClick()}>Home</NavLink>
            <NavLink to="/browse" onClick={() => handleMenuClick()}>Browse</NavLink>
            <NavLink to="/news" onClick={() => handleMenuClick()}>News</NavLink>
            <NavLink to="/donate" onClick={() => handleMenuClick()}>Donate</NavLink>
            <NavLink to="/contact" onClick={() => handleMenuClick()}>Contact</NavLink>
          </div>
          <div className="menuSecond" onClick={() => handleMenuClick()}/>
        </div>
        <div className="nav-container">
          <div className='nav-left'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/browse">Browse</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/donate">Donate</NavLink>
          </div>
          <div className='nav-right'>
            <Searchbar mobile={false}/>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

