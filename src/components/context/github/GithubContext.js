import axios from "axios";
import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const URL =process.env.REACT_APP_GITHUB_URL
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //   get rendom users

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      
    });
    const data = await response.json();

    axios(`${process.env.REACT_APP_GITHUB_URL}/users`).then((result) => {
        dispatch({
            type: "GET_USERS",
            payload:result.data,
          });
    }).catch((err) => {
        console.log(err);
    });
    
  };
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  // gitHub searchResults
  const SearchUser = async (text) => {
    setLoading(); 
    const params = new URLSearchParams({
      q: text,
      // q:"krcpr"
    });
  
    axios(  `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`).then((result) => {
        dispatch({
            type: "GET_USERS",
            payload: result.data.items,
          });
    }).catch((err) => {
        console.log(err);
    });
  };
  //   Lets clear users form state
  const clearUser = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  
    //   get a single user
    const getUser =  (login) => {
        setLoading();
        axios( `${URL}/users/${login}`).then((result) => {
            dispatch({
                type: "GET_USER",
                payload: result.data,
              });
        }).catch((err) => {
            console.log(err);
        });
      
      };

  return (
    <GithubContext.Provider
      value={{
        // ...state,
        // dispatch,
        user: state.user,
        users: state.users,
        loading: state.loading,
        fetchUsers,
        clearUser,
         SearchUser,getUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;