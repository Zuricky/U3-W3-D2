export const ADD_TO_FAVOURITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addToFavouriteAction = (job) => ({
  type: ADD_TO_FAVOURITE,
  payload: job,
});

export const removeFromFavouriteAction = (job) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: job,
});

export const setSearchResultsAction = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.example.com/jobs?search=${query}`);
      const data = await response.json();
      dispatch(setSearchResultsAction(data));
    } catch (error) {
      console.error("Errore nella ricerca", error);
    }
  };
};
