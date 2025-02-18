const initialFavouritesState = {
  list: [],
};

const favourites = (state = initialFavouritesState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return { ...state, list: [...state.list, action.payload] };
    case "REMOVE_FROM_FAVOURITE":
      return { ...state, list: state.list.filter((fav) => fav !== action.payload) };
    default:
      return state;
  }
};

export default favourites;
