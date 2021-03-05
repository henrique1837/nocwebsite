import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'tokenomic', 'incentives', 'principles', 'roadmap', 'team'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">What is NoCon?</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="tokenomic">
                    <a href="#">Tokenomic</a>
                </Scroll>
            </li>      
            <li>
                <Scroll type="id" element="incentives">
                    <a href="#">Incentives</a>
                </Scroll>
            </li>                  
            <li>
                <Scroll type="id" element="principles">
                    <a href="#">Principles</a>
                </Scroll>
            </li>          
            <li>
                <Scroll type="id" element="roadmap">
                    <a href="#">Roadmap</a>
                </Scroll>
            </li>           
            <li>
                <Scroll type="id" element="team">
                    <a href="#">Team</a>
                </Scroll>
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
