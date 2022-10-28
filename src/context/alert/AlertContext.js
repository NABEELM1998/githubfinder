import { createContext, useReducer } from "react";
import { alertReducer, initialState } from "./AlertReducer";
export const AlertContext = createContext();

export const AlertProvider = ({children}) =>{
    const [state,dispatch] = useReducer(alertReducer,initialState)
    const setAlert = (msg,type) => {
        dispatch({
            type:'SET_ALERT',
            payload:{msg,type}
        })
        setTimeout(()=>dispatch({type:'REMOVE_ALERT'}),3000)
    }
    return (
    <AlertContext.Provider value={{alert:state,setAlert}}>
        {children}
    </AlertContext.Provider>)
}