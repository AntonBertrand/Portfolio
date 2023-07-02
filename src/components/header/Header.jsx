import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/FlatAvatar.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
        <div className="container header__container">


          <div className="header__info">
            <h5>Hello I'm</h5>
            <h1>Anton Bertrand</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <HeaderSocials/>
            <CTA/>
          </div>


          <div className="me">
              <img src={ME} alt="" />
          </div>

        </div>
    </header>
  )
}

export default Header;