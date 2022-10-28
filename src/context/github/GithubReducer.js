export const initialState = {
    users:[],
    user :{},
    repos:[],
    loader : false
}
export const GithubReducer = (state,action) => {
    switch(action.type){
        case 'USERS_LOADED':
            return {...state,users:action.payload,loader:false}
        case 'CLEAR_USERS':
            return {...state,users:[]}
        case 'GET_USER':
            return {...state,user:action.payload,loader:false}
        case 'GET_REPOS':
            return {...state,repos:action.payload,loader:false}
        default:
            return state
    }

}