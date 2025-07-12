
const todo=[]
function todoApp(state=todo,action){
    switch(action.type){
        case "add":
            return [...state,action.Payload]
        case "delete":
            return (state.filter((e)=>e.id!==action.Payload))
        case "completion":
            return (state.map((e)=>e.id==action.Payload?{...e,status:!e.status}:e))
        default:
            return state
    }
}
export default todoApp;