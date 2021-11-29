import React from "react";
import * as NFLIcons from "react-nfl-logos";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/" activeStyle>
          <NFLIcons.ARI size={140} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/apply" activeStyle>
            Apply
          </NavLink>
          <NavLink to="/teamsandschedules" activeStyle>
            Schedules
          </NavLink>
          <NavLink to="/scores" activeStyle>
            Scores
          </NavLink>
          <NavLink to="/map" activeStyle>
            Maps
          </NavLink>
          <NavLink to="/sponsors" activeStyle>
            Sponsors
          </NavLink>
          <NavLink to="/faq" activeStyle>
            FAQ
          </NavLink>
        </NavMenu>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;

{/* <NavLink to="/login">Sign In</NavLink> */}