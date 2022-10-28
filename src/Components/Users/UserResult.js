import { useEffect, useState } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
const UserResult = () => {
    const {state,searchUsers} = useContext(GithubContext)
    // useEffect(()=>{
    //     searchUsers()
    // },[])
    // const [users,setUsers] = useState([])
    // const [loader,setLoader] = useState(true)    
    // const fetchUsers = async() => {
    //     //const response = await fetch("https://api.github.com/users",
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    //     // ,
    //     // {
    //     //     headers:{
    //     //         Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //     //     }
           
    //     // })
        
    //     const data = await response.json()
    //     setUsers(data)
    //     setLoader(false)
    // }
    if(!(state.loader)){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {
                    // state.user.length>0 ?
                     state.users?.map((user)=>{
                        return <UserItem key={user.id} user= {user}/>
                    })//:<div></div>
                }
            </div>
        )
    } 
    else{
        return <Spinner/>
    }
    
}
export default UserResult;