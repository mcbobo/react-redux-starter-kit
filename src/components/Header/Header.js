import React from 'react';
import Nav from '../Nav';
import classes from './Header.scss';
import LogoImage from '../../static/logo_green.png';

export const Header = () => (
  <div className={classes.headerWrap}>
    <img
      alt={"Lending Loop"}
      src={LogoImage}
    />
    <div className={classes.titleWrap}>
      <h1>Loop Credit</h1>
      <h2>The Best Predictor to Default</h2>
    </div>
    <Nav />
  </div>
);

export default Header;
