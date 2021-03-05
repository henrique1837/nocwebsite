import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/goodquestions">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/noconescrow">
                What is NOC Escrow?
              </Link>
            </li>
            <li>
              <Link to="/generic">
              Dapp
              </Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
