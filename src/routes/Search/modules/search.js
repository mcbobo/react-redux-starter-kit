import 'whatwg-fetch';

// ** Action Constants ** //

export const SET_SEARCH_BAR_WRAP_CLASS  = 'SET_SEARCH_BAR_WRAP_CLASS';
export const SEARCHING_LOAN_APPS        = 'SEARCHING_LOAN_APPS';
export const RECEIVE_LOAN_APPS          = 'RECEIVE_LOAN_APPS';

// TODO clean up these constants
const focusedClass = 'focused';
const hasResultsClass = 'hasResults';

// ** Actions (Synchronous) ** //

export function setSearchBarWrapClass(value) {
  return {
    type: SET_SEARCH_BAR_WRAP_CLASS,
    payload: value
  }
}

export function searchingLoanApps() {
  return {
    type: SEARCHING_LOAN_APPS
  }
}

export function receiveLoanApps(value) {
  return {
    type: RECEIVE_LOAN_APPS,
    payload: value
  }
}

// ** Thunks ** //

export const searchFromRails = (value) => {
  return (dispatch: Function): Promise => {
    dispatch(searchingLoanApps());

    // TOOD Put this into a async file? ?lockup_codeword=spadina
    return fetch(`http://localhost:3001/api/${escape(value)}`)
      .then(response => response.json())
      .then(json => dispatch(receiveLoanApps(json)));
  }
}

// TODO Debounce
// searchFromRails = _.debounce(searchFromRails, 500);
// export searchFromRails;

// ** Export Actions ** //

export const actions = {
  setSearchBarWrapClass,
  searchFromRails,
  searchingLoanApps,
  receiveLoanApps
}

// ** Action Handlers ** //

const ACTION_HANDLERS = {
  [SET_SEARCH_BAR_WRAP_CLASS]: (state, action) =>  {
    return Object.assign({}, state, { searchBarWrapClass: action.payload });
  },
  [SEARCHING_LOAN_APPS]: (state, action) => {
    console.log("searching action handler");
    // TODO Clean up this logic below - check searchWrapClass undefined?
    if (state.searchWrapClass.indexOf(action.payload) !== -1) return state;

    return Object.assign({}, state, { 
      searchWrapClass: [
        ...state.searchWrapClass,
        focusedClass
      ]
    });
  },
  [RECEIVE_LOAN_APPS]: (state, action) => Object.assign({}, state, { loanApps: action.payload })
}

// ** Reducers ** //

// TODO Clean up initial state
const initialState = { 
  searchBarWrapClass: '',
  searchWrapClass: ['searchWrap']
};

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
