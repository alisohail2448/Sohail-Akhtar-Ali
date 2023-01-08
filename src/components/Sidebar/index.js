import React, { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Sohail" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon icon={faClose} color='#ffd700' size='3x' className='close-icon' onClick={() => setShowNav(false)}  />
      </nav>


      <ul>
        <li>
            <a target="_blank" rel='noreferrer'  href="https://www.linkedin.com/in/sohail-akhtar-ali-b400a4223/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer'  href="https://github.com/alisohail2448">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer'  href="https://www.instagram.com/iam_ali/">
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer'  href="https://twitter.com/SohailAkhtarAl3">
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
        </li>
      </ul>

      <FontAwesomeIcon icon={faBars} color="#ffd700" size='3x' onClick={() => setShowNav(true)} className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
