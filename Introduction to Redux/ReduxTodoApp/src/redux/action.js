export const addTodo=(todo)=>({type:"add",Payload:todo})
export const deleted=(id)=>({type:"delete",Payload:id})
export const complete=(id)=>({type:"completion",Payload:id})