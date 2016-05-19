import React from 'react';
import '../../styles/core.scss';
import Header from '../../components/Header';
import classes from './CoreLayout.scss';

export const CoreLayout = ({ children }) => (
  <div className={classes.mainContainer}>
    <Header />
    <div className={classes.bodyContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
