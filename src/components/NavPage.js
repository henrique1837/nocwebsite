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
              <Link to="/generic">
                Buy
              </Link>
            </li>
            <li>
              <Link to="/stake">
                Stake
              </Link>
            </li>
            <li>
              <Link to="/dao">
                DAO
              </Link>
            </li>
            <li>
              <Link to="/escrow">
                Escrow
              </Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
