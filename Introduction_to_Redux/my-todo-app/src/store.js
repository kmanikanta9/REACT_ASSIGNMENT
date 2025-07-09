import {createStore} from "redux"
import addTodo from "./redux/reducers/addreducer"

const todo=createStore(addTodo)

export default todo;
