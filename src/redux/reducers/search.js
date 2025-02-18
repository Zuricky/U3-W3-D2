const initialSearchState = {
  results: [],
};

const search = (state = initialSearchState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default search;
