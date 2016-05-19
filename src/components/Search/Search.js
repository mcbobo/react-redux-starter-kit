import React, { PropTypes } from 'react';
import SearchIcon from 'routes/Search/assets/search_icon.png';
import classes from './Search.scss';

// TODO reimplmenet this?
// function convertToClasses() {
//   // let searchWrapClass = search.searchWrapClass.reduce((prev, curr) => `${
//   //   prev} ${ classes[curr]}`, "");
// }

// TODO add props

export const Search = ({
  search,
  focusSearchBar,
  blurSearchBar,
  searchFromRails
}) => {
  return (
    <div className={classes.search}>
      <div className={classes.searchWrap}>
        <img
          alt='Search'
          className={classes.searchIcon}
          src={SearchIcon}
        />
        <div className={
          `${classes.searchBarWrap} 
          ${classes[search.searchBarWrapClass]}`
        }>
          <input
            className={classes.searchBar}
            placeholder='Search for a Business by "RailsID", email, etc.'
            onClick={focusSearchBar}
            onBlur={blurSearchBar}
            // TODO debounce
            onChange={(ev => searchFromRails(ev.target.value))}
          />
          <div className={
            `${classes.searchFocusLine} 
            ${classes[search.searchBarWrapClass]}`
          }></div>
        </div>
      </div>
      <div className={classes.resultsWrap}>
        {JSON.stringify(search.loanApps)}
      </div>
    </div>
  );
};

// TODO Finish the proptype validation
Search.propTypes = {
  search: PropTypes.shape({
    searchBarWrapClass: PropTypes.string.isRequired,
    searchWrapClass: PropTypes.array.isRequired
  }).isRequired,
  focusSearchBar: PropTypes.func.isRequired,
  blurSearchBar: PropTypes.func.isRequired,
  searchFromRails: PropTypes.func.isRequired
};

export default Search;
