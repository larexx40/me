import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/me.jpg";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home__">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Olatunji Rokeeb Olanrewaju</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className="me">
            <img src={ME} alt="me" />
        </div>

        <a className='scroll_down' href="#contact">Scroll Down</a>


      </div>
    </header>
  )
}

export default Header