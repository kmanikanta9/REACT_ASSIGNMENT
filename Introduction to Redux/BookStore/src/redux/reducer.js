

const initialState=[]
export default function bookReducer(state=initialState,action){
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
        default:
            return state
    }

}