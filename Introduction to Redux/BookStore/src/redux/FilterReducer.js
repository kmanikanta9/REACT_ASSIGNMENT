

const initialState={author:"",genre:"",title:""}
function filterReducer(state=initialState,action){
    switch(action.type){
        case "set_filter":
            return {...state, ...action.payload}
        
        default:
            return state
    }

}
export default filterReducer;