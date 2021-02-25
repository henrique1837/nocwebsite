import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>NoContract</h1>
        <p>NoCon is a DAO (Decentralised Autonomous Organisation) and gonverned by the community of stakeholders</p>
    </header>
)

export default Header
