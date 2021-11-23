//import { Router } from 'express';
import React from 'react'
//import { Route, Switch } from 'react-router-dom'
import { BrowserRouter, Link, NavLink } from "react-router-dom";
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//   } from './NavbarElements';

const Header = () => {
    return (
      <div className="navbar-fixed">
                       <nav className="z-depth-0">
                       <div className="nav-wrapper white">
                       <Link
                                   to="/"
                                   style={{
                                       fontFamily: "monospace"
                                   }}
                                   className="col s5 brand-logo center black-text">
                                   <i className="material-icons"></i>ASU Sparky Soccer Tournament</Link>                
                       </div>
                   </nav>
                   </div>
    )
}

export default Header

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

  
// class Navbar extends Component {
//     render() {
//         return (
//             <div className="navbar-fixed">
//                 <nav className="z-depth-0">
//                 <div className="nav-wrapper white">
//                 <Link
//                             to="/"
//                             style={{
//                                 fontFamily: "monospace"
//                             }}
//                             className="col s5 brand-logo center black-text">
//                             <i className="material-icons"></i>Soccer Tournament Management</Link>                
//                 </div>
//             </nav>
//             </div>
            
//         );
//     }
// }
// export default Navbar;

// <Nav>
//                 <Bars />
  
//                 <NavMenu>
//                     <NavLink to='/about' activeStyle>
//                         About
//                     </NavLink>
//                 </NavMenu>
//                 <NavBtn>
//                     <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//                 </NavBtn>
//             </Nav>

// <NavLink to='/events' activeStyle>
//                         Events
//                     </NavLink>
//                     <NavLink to='/annual' activeStyle>
//                         Annual Report
//                     </NavLink>
//                     <NavLink to='/team' activeStyle>
//                         Teams
//                     </NavLink>
//                     <NavLink to='/blogs' activeStyle>
//                         Blogs
//                     </NavLink>
//                     <NavLink to='/sign-up' activeStyle>
//                         Sign Up
//                     </NavLink>
//                     {/* Second Nav */}
//                     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

// 
                        
//                     