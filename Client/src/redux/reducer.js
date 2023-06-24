import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER:
      return {
        ...state,
        myFavorites:
          action.payload === "All"
            ? state.allCharacters
            : state.allCharacters.filter(
                (char) => char.gender === action.payload
              ),
      };
    case ORDER:
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (a.id < b.id) {
            return action.payload === "A" ? -1 : 1;
          }
          if (a.id > b.id) {
            return action.payload === "A" ? 1 : -1;
          }
          return 0;
        }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
