import { createContext,useReducer } from "react";
import { initialState,GithubReducer } from "./GithubReducer";
export const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GTIHUB_TOKEN
export const GithubProvider = ({children}) => {
    const[state,dispatch] = useReducer(GithubReducer,initialState)
    const searchUsers = async(text) =>{
       //url = https://api.github.com/search/users?q=NABEEL
       const params = new URLSearchParams({
        q:text
       })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const {items} = await response.json();
        dispatch({
            type:'USERS_LOADED',
            payload:items
        })
        // setUsers(data)
        // setLoader(false)
    }

    //fetching single users
    const getUser = async(login) => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`)
        //if there are no matching user found
        if (res.status === 404){
            window.localStorage('/notfound')
        }
        else{
            const data = await res.json();
        dispatch({
            type:"GET_USER",
            payload : data
        })
        }

    }
    const getRepos = async(login) => {
        const params = new URLSearchParams({
            sort:'created',
            per_page:10
        })
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`)
        const data = await res.json();
        dispatch({
            type : 'GET_REPOS',
            payload : data
        })
    }

    return(
        <GithubContext.Provider value={{state,searchUsers,dispatch,getUser,getRepos}}>
            {children}
        </GithubContext.Provider>
    )
}