import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import '../style/Footer.scss'
export default function Footer() {
  const [emailSubscribe, setEmailSubscribe] = useState("");
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setEmailSubscribe("");
  }
  return (
    <div className='footerContainer'>
      <div className="upperSide">
        <div className="collumn">
          <div className="item header">About</div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="collumn">
          <div className="item header">Informations</div>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/privacy_policy">Privacy Policy</NavLink>
          <NavLink to="/cookies">Cookies</NavLink>
        </div>
        <div className="subscribeContainer">
          <div className="item header">Subscribe</div>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder='Email Address' value={emailSubscribe} onChange={(e) => setEmailSubscribe(e.target.value)} name="email"/>
            <input type="submit" value="Subscribe" />
          </form>
          <div className="desc">Get new information about our site and new anime</div>
        </div>
      </div>
      <div className="lowerSide">
        <div className="socialLinks">
          <a href="https://github.com/Adrian-Lewek" rel="noreferrer" target="_blank" className="item">
            <AiFillLinkedin/>
          </a>
          <a href="https://github.com/Adrian-Lewek" rel="noreferrer" target="_blank" className="item">
            <AiFillGithub/>
          </a>
        </div>
        <div className="copyrights">
          © - Adrian Lewek All Rights Reserved
        </div>
      </div>
    </div>
  )
}