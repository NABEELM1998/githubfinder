import { useState,useContext, useEffect } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import { AlertContext } from "../../context/alert/AlertContext";
const UserSearch = () =>{
    const {state,searchUsers,dispatch} = useContext(GithubContext);
    const [text,setText] = useState('')
    const {setAlert} = useContext(AlertContext);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit =  (e) =>{
        e.preventDefault()
        if (text===''){
            setAlert("please Enter something","error")
        }
        else{
            //to do
           searchUsers(text)
            
            setText('')
        }
    }
    //clear Handler
    const clearHandler = () => {
        dispatch({
            type:"CLEAR_USERS"
        })
    }
    return(
        <div className="grid grid-cols-1 xl:grid-cols-2 
        lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input value={text} 
                            type='text' className="w-full pr-40 bg-gray-200 input 
                            input-lg text-black" placeholder="Searh"
                            onChange={handleChange}/>
                            <button type="submit"
                            className="absolute top-0 right-0 rounded-l-none
                            w-36 btn btn-lg">GO</button>
                        </div>
                    </div>
                </form>
            </div>
            {state.users.length>0 && <div>
                <button className="btn btn-ghost btn-lg" onClick={clearHandler}>Clear</button>
            </div>}
            
        </div>
    )
}
export default UserSearch;