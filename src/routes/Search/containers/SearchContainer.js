import { connect } from 'react-redux';
import {
  setSearchBarWrapClass,
  searchFromRails,
  searchingLoanApps,
  receiveLoanApps
} from '../modules/search';

import Search from 'components/Search';

// TODO clean up how this is being done
const focused = 'focused';

const mapActionCreators = {
  focusSearchBar:   () => setSearchBarWrapClass(focused),
  blurSearchBar:    () => setSearchBarWrapClass(''),
  searchFromRails,
  searchingLoanApps,
  receiveLoanApps
};

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(mapStateToProps, mapActionCreators)(Search);
