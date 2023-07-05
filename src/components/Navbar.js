import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../scripts/new_nav_app'
import '../styles/Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeLink: null
    };
  }

  handleMenuToggle = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
    this.handleMenuToggle();
  }

  render() {
    const { isMenuOpen, activeLink } = this.state;

    return (
      <nav className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
        <div className="">
          <div className="nav_container">
            <div className="logo">
            <img src={require('../images/logo.png')} className="logo" alt=""/>
            </div>
            <div className="hamburger-menu" onClick={this.handleMenuToggle}>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="links">
          <ul>
            <li className="nav_item">
              <Link to="/" className={activeLink === 'home' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('home')}>Home</Link>
            </li>
            <li className="nav_item">
              <Link to="/AboutUs" className={activeLink === 'about' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('about')}>AboutUs</Link>
            </li>
            <li className="nav_item">
              <Link to="/Products" className={activeLink === 'products' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('products')}>Products</Link>
            </li>
            <li className="nav_item">
              <Link to="/Career" className={activeLink === 'career' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('career')}>Career</Link>
            </li>
            <li className="nav_item">
              <Link to="/Clients" className={activeLink === 'clients' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('clients')}>Clients</Link>
            </li>
            <li className="nav_item">
              <Link to="/Contactus" className={activeLink === 'contact' ? 'active_nav' : ''} onClick={() => this.handleLinkClick('contact')}>ContactUs</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
