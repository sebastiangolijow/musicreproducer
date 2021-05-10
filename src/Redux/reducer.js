
const InitialState = {
music: [],
favorites: [],
};
  


function Reducer(state = InitialState, action) {

    switch (action.type) { 
      case "SEARCH":
        return {
            ...state,
            music:  action.payload.data
         };
        case 'FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload.data[0]]
            };
              
      case "REMOVE_FAV":
        return {
          ...state,
        favorites: state.favorites && state.favorites.filter((el) => el.id !== action.payload),
        };
      default:
        return state;
    }
  }
  
  export default Reducer;