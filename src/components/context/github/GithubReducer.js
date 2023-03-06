const GithubReducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.payload,
          loading: false,
          user: {},
          repos: [],
        };
    
       
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "CLEAR_USERS":
        return {
          ...state,
          users: [],
        };  case "GET_USER":
        return {
          ...state,
          user: action.payload, 
  
          // repos: action.payload.repos,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default GithubReducer;