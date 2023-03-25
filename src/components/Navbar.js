import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';



function NavBar() {

  // This hook stores whether the hamburger menu has been clicked
  // It is false (not clicked) by default
  const [click, setClick] = useState(false);

  // This hook stores whether the dropdown menu is visible
  // It is false (not visible) by default
  const [dropdown, setDropdown] = useState(false);


  // This function sets the click variable to be the opposite state
  // It is used to open/close the hamburger menu
  const handleClick = () => setClick(!click);

  // This function closes the mobile menu by setting 'click' to false
  const closeMobileMenu = () => setClick(false);


  // When the mouse hovers over the dropdown menu link, set the dropdown menu
  const onMouseEnter = () => {
    
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  // When the mouse hovers pver and leaves the dropdown menu link, hide the dropdown
  const onMouseLeave = () => {

    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }



  // Return the Navigation Bar Component
  return (
    <>
      {/* Navigation Bar Component */}
      <nav className='navbar'>

        {/* Top Left Logo for Navigation Bar */}
        <Link to='/' className='navbar-logo'>
          EPIC
        </Link>

        {/* Icon For Mobile Hamburger Menu */}
        {/* When the menu icon is clicked, call the handleClick function */}
        <div className='menu-icon' onClick={handleClick}>

          {/* If 'click' is true, display the X icon, otherwise display the hamburger icon*/}
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
        </div>


        {/* Navigation Bar */}
        {/* If 'click' is true, display the mobile navigation menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* Home Link */}
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* Services Link with Dropdown Menu */}
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link 
              to='/services' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>

            {/* If 'dropdown' is true, display the Dropdown menu component */}
            {dropdown && <Dropdown />}
          </li>

          {/* Contact Us Link */}
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>

          {/* Sign Up Link */}
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Sign Up Button */}
        <Button />
        
      </nav>
    </>
  )
}


export default NavBar;
