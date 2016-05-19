import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Nav.scss';

export const Nav = () => (
  <nav className={classes.nav}>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Search
    </IndexLink>
    <Link to='/templates' activeClassName={classes.activeRoute}>
      Templates
    </Link>
    <Link to='/scorecards' activeClassName={classes.activeRoute}>
      Scorecards
    </Link>
  </nav>
);

export default Nav;
