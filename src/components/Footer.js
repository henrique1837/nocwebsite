import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>About us</h2>
      <p>

      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      {/*
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
        <dt>Telegram</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
        <dt>Status</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
        <dt>Github</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>
      */
      }
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
