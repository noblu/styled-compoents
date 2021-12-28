import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import Group from '../images/Group.png';
import CloseGroup from '../images/iconclose.png'
const IconLogo = styled.img``;


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
      <IconContext.Provider>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <IconLogo src={Group} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <IconLogo src={CloseGroup } />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                  <li key={index} className='Item-List'>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              }
            )}
               
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
