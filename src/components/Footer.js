import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/bitwala-logo.svg';
import solaris from '../img/solaris-logo.svg';
import euenLogo from '../img/EU-EN.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered" style={{marginBottom: '5%'}}>
          Crypto-friendly banking in minutes
          <button className="free_account">
            Get your free account
          </button>
        </div>
        <div className="content has-text-centered bitwala-footer has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div className="columns">
              <div className="column is-2">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        <img src={logo} alt="Bitwala" style={{ width: '88px' }} />
                        <div style={{fontSize: '10px'}}>Blockchain Banking</div>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Bank Account
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Crypto Currency Trading
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Debit Card
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Bitcoin Wallet
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Academy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        MarketWatch
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        SupportCenter
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        ServiceStatus
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item navbar-subitem" to="/contact">
                        Meetus
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 social">
                <ul className="menu-list">
                  <li className="navbar-item">
                    Social
                  </li>
                </ul>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item" style={{ textAlign: 'right' }}>
                      <img src={solaris} alt="Bitwala" style={{ width: '88px' }} />
                    </Link>
                  </li>
                </ul>
              </section>
          </div>
          <div className="column is-6">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    <img src={euenLogo} alt="Bitwala" style={{ width: '88px', height: '108px'}} />
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
